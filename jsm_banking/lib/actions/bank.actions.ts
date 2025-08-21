"use server";

import {
  ACHClass,
  CountryCode,
  TransferAuthorizationCreateRequest,
  TransferCreateRequest,
  TransferNetwork,
  TransferType,
} from "plaid";

import { plaidClient } from "../plaid";
import { parseStringify } from "../utils";

// import { getTransactionsByBankId } from "./transaction.actions";
import { getBanks, getBank } from "./user.actions";

// Get multiple bank accounts
export const getAccounts = async ({ userId }: getAccountsProps) => {
  try {
    // Get banks from DB
    const banks = await getBanks({ userId });
    console.log('Banks:', banks); // Log the banks data

    if (!banks || banks.length === 0) {
      return { data: [], totalBanks: 0, totalCurrentBalance: 0 };
    }

    const accounts = await Promise.all(
      banks.map(async (bank: Bank) => {
        if (!bank.accessToken) {
          console.error('Bank accessToken is undefined:', bank);
          return null;
        }

        try {
          // Get each account info from Plaid
          const accountsResponse = await plaidClient.accountsGet({
            access_token: bank.accessToken,
          });
          console.log('Accounts Response:', accountsResponse); // Log the Plaid response

          if (!accountsResponse || !accountsResponse.data.accounts.length) {
            console.error('Accounts response is invalid:', accountsResponse);
            return null;
          }

          const accountData = accountsResponse.data.accounts[0];

          // Get institution info from Plaid
          const institution = await getInstitution({
            institutionId: accountsResponse.data.item.institution_id!,
          });

          return {
            id: accountData.account_id,
            availableBalance: accountData.balances.available!,
            currentBalance: accountData.balances.current!,
            institutionId: institution.institution_id,
            name: accountData.name,
            officialName: accountData.official_name,
            mask: accountData.mask!,
            type: accountData.type as string,
            subtype: accountData.subtype! as string,
            appwriteItemId: bank.$id,
            sharableId: bank.sharableId,
          };
        } catch (error) {
          console.error('Error fetching account details:', error);
          return null;
        }
      })
    );

    const filteredAccounts = accounts.filter(account => account !== null);
    const totalBanks = filteredAccounts.length;
    const totalCurrentBalance = filteredAccounts.reduce((total, account) => {
      return total + account.currentBalance;
    }, 0);

    return parseStringify({
      data: filteredAccounts,
      totalBanks,
      totalCurrentBalance,
    });
  } catch (error) {
    console.error('An error occurred while getting the accounts:', error);
    return { data: [], totalBanks: 0, totalCurrentBalance: 0 };
  }
};




// Get one bank account
export const getAccount = async ({ appwriteItemId }: getAccountProps) => {
  try {
    const bank = await getBank({ documentId: appwriteItemId });

    if (!bank || !bank.accessToken) {
      throw new Error('Bank or bank accessToken is undefined');
    }

    const accountsResponse = await plaidClient.accountsGet({
      access_token: bank.accessToken,
    });

    if (!accountsResponse || !accountsResponse.data.accounts.length) {
      throw new Error('Accounts response is invalid');
    }

  const accountData = accountsResponse.data.accounts[0];
  // getTransactionsByBankId not yet implemented; using empty transfer history placeholder
  const transferTransactions: any[] = [];

    const institution = await getInstitution({
      institutionId: accountsResponse.data.item.institution_id!,
    });

    const transactions = await getTransactions({
      accessToken: bank.accessToken,
    });

    const account = {
      id: accountData.account_id,
      availableBalance: accountData.balances.available!,
      currentBalance: accountData.balances.current!,
      institutionId: institution.institution_id,
      name: accountData.name,
      officialName: accountData.official_name,
      mask: accountData.mask!,
      type: accountData.type as string,
      subtype: accountData.subtype! as string,
      appwriteItemId: bank.$id,
    };

    const allTransactions = [...transactions, ...transferTransactions].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return parseStringify({
      data: account,
      transactions: allTransactions,
    });
  } catch (error) {
    console.error('An error occurred while getting the account:', error);
    return null;
  }
};


// Get bank info
export const getInstitution = async ({
  institutionId,
}: getInstitutionProps) => {
  try {
    const institutionResponse = await plaidClient.institutionsGetById({
      institution_id: institutionId,
      country_codes: ["US"] as CountryCode[],
    });

    const intitution = institutionResponse.data.institution;

    return parseStringify(intitution);
  } catch (error) {
    console.error("An error occurred while getting the accounts:", error);
  }
};

// Get transactions
export const getTransactions = async ({
  accessToken,
}: getTransactionsProps) => {
  let hasMore = true;
  let transactions: any = [];

  try {
    // Iterate through each page of new transaction updates for item
    while (hasMore) {
      const response = await plaidClient.transactionsSync({
        access_token: accessToken,
      });

      const data = response.data;

      transactions = response.data.added.map((transaction) => ({
        id: transaction.transaction_id,
        name: transaction.name,
        paymentChannel: transaction.payment_channel,
        type: transaction.payment_channel,
        accountId: transaction.account_id,
        amount: transaction.amount,
        pending: transaction.pending,
        category: transaction.category ? transaction.category[0] : "",
        date: transaction.date,
        image: transaction.logo_url,
      }));

      hasMore = data.has_more;
    }

    return parseStringify(transactions);
  } catch (error) {
    console.error("An error occurred while getting the accounts:", error);
  }
};