"use server";

import { Client } from "dwolla-v2";

function parseDwollaError(err: any) {
  const body = err?.body || err?.response?.body;
  const message = body?.message || body?._embedded?.errors?.[0]?.message || err?.message || 'Dwolla request failed';
  const code = body?._embedded?.errors?.[0]?.code || body?.code || err?.status || err?.name;
  return { message, code, raw: body };
}

const getEnvironment = (): "production" | "sandbox" => {
  const environment = process.env.DWOLLA_ENV as string;

  switch (environment) {
    case "sandbox":
      return "sandbox";
    case "production":
      return "production";
    default:
      throw new Error(
        "Dwolla environment should either be set to `sandbox` or `production`"
      );
  }
};

const dwollaClient = new Client({
  environment: getEnvironment(),
  key: process.env.DWOLLA_KEY as string,
  secret: process.env.DWOLLA_SECRET as string,
});

// Create a Dwolla Funding Source using a Plaid Processor Token
export const createFundingSource = async (
  options: CreateFundingSourceOptions
) => {
  try {
    return await dwollaClient
      .post(`customers/${options.customerId}/funding-sources`, {
        name: options.fundingSourceName,
        plaidToken: options.plaidToken,
      })
      .then((res) => res.headers.get("location"));
  } catch (err) {
    const info = parseDwollaError(err);
    console.error("[dwolla] Creating a Funding Source failed", info);
    throw new Error(`Dwolla funding source error: ${info.message} (${info.code || 'no-code'})`);
  }
};

export const createOnDemandAuthorization = async () => {
  try {
    const onDemandAuthorization = await dwollaClient.post(
      "on-demand-authorizations"
    );
    const authLink = onDemandAuthorization.body._links;
    return authLink;
  } catch (err) {
    const info = parseDwollaError(err);
    console.error("[dwolla] On Demand Authorization failed", info);
    throw new Error(`Dwolla on-demand authorization error: ${info.message} (${info.code || 'no-code'})`);
  }
};

export const createDwollaCustomer = async (
  newCustomer: NewDwollaCustomerParams
) => {
  try {
    return await dwollaClient
      .post("customers", newCustomer)
      .then((res) => res.headers.get("location"));
  } catch (err) {
    const info = parseDwollaError(err);
    console.error("[dwolla] Creating customer failed", { newCustomer, ...info });
    throw new Error(`Dwolla customer error: ${info.message} (${info.code || 'no-code'})`);
  }
};

export const createTransfer = async ({
  sourceFundingSourceUrl,
  destinationFundingSourceUrl,
  amount,
}: TransferParams) => {
  try {
    const requestBody = {
      _links: {
        source: { href: sourceFundingSourceUrl },
        destination: { href: destinationFundingSourceUrl },
      },
      amount: { currency: "USD", value: amount },
    };
    return await dwollaClient
      .post("transfers", requestBody)
      .then((res) => res.headers.get("location"));
  } catch (err) {
    const info = parseDwollaError(err);
    console.error("[dwolla] Transfer failed", info);
    throw new Error(`Dwolla transfer error: ${info.message} (${info.code || 'no-code'})`);
  }
};

export const addFundingSource = async ({
  dwollaCustomerId,
  processorToken,
  bankName,
}: AddFundingSourceParams) => {
  try {
    const dwollaAuthLinks = await createOnDemandAuthorization();
    const fundingSourceOptions = {
      customerId: dwollaCustomerId,
      fundingSourceName: bankName,
      plaidToken: processorToken,
      _links: dwollaAuthLinks,
    };
    return await createFundingSource(fundingSourceOptions);
  } catch (err) {
    const info = parseDwollaError(err);
    console.error("[dwolla] Add funding source failed", info);
    throw new Error(`Dwolla add funding source error: ${info.message} (${info.code || 'no-code'})`);
  }
};