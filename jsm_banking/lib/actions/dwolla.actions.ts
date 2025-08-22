"use server";

import { Client } from "dwolla-v2";

function parseDwollaError(err: any) {
  const body = err?.body || err?.response?.body;
  const message = body?.message || body?._embedded?.errors?.[0]?.message || err?.message || 'Dwolla request failed';
  const code = body?._embedded?.errors?.[0]?.code || body?.code || err?.status || err?.name;
  return { message, code, raw: body };
}

// Resolve environment without throwing at import time (prevents build failures when
// env vars are absent in static build context). Defaults to sandbox and warns.
const getEnvironment = (): "production" | "sandbox" => {
  const val = (process.env.DWOLLA_ENV || '').toLowerCase();
  if (val === 'production') return 'production';
  if (val !== 'sandbox') {
    if (process.env.BUILD_TIME === '1') {
      console.warn('[dwolla] DWOLLA_ENV missing; defaulting to sandbox for build shell.');
    } else {
      console.warn('[dwolla] Invalid DWOLLA_ENV value; defaulting to sandbox. Set DWOLLA_ENV="sandbox" or "production".');
    }
  }
  return 'sandbox';
};

let _dwollaClient: Client | null = null;
function getDwollaClient(): Client {
  if (_dwollaClient) return _dwollaClient;
  const key = process.env.DWOLLA_KEY;
  const secret = process.env.DWOLLA_SECRET;
  if (!key || !secret) {
    // Provide a dummy client that will throw only when actually used
    const missing = ['DWOLLA_KEY','DWOLLA_SECRET'].filter(n=>!(process.env as any)[n]).join(', ');
    throw new Error(`[dwolla] Missing credentials (${missing}). Add them as environment variables.`);
  }
  _dwollaClient = new Client({ environment: getEnvironment(), key, secret });
  return _dwollaClient;
}

// Create a Dwolla Funding Source using a Plaid Processor Token
export const createFundingSource = async (
  options: CreateFundingSourceOptions
) => {
  try {
  const client = getDwollaClient();
  return await client
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
  const client = getDwollaClient();
  const onDemandAuthorization = await client.post(
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
  const client = getDwollaClient();
  return await client
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
  const client = getDwollaClient();
  return await client
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