import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

let warned = false;
const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;

function headers() {
    if (!PLAID_CLIENT_ID || !PLAID_SECRET) {
        if (!warned) {
            console.error('[plaid] Missing PLAID_CLIENT_ID or PLAID_SECRET env vars. Plaid calls will fail.');
            warned = true;
        }
    }
    return {
        'PLAID-CLIENT-ID': PLAID_CLIENT_ID || 'missing-client-id',
        'PLAID-SECRET': PLAID_SECRET || 'missing-secret',
    };
}

const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: { headers: headers() }
});

export const plaidClient = new PlaidApi(configuration);

export function plaidEnvSummary() {
    return {
        clientIdSet: !!PLAID_CLIENT_ID,
        secretSet: !!PLAID_SECRET,
        clientIdPreview: PLAID_CLIENT_ID ? PLAID_CLIENT_ID.slice(0,4)+'…' : undefined,
    };
}