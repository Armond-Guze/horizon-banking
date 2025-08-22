## Horizon Banking App

Next.js 14 (App Router) banking demo integrating Appwrite, Plaid, and Dwolla.

### Develop Locally
```bash
cp .env.example .env   # fill in required secrets
npm install
npm run dev
```
Visit http://localhost:3000.

### Environment Variables
All secrets are kept out of version control. Fill these in (.env not committed):

APPWRITE_DATABASE_ID, APPWRITE_USER_COLLECTION_ID, APPWRITE_BANK_COLLECTION_ID, APPWRITE_TRANSACTION_COLLECTION_ID, NEXT_APPWRITE_KEY
PLAID_CLIENT_ID, PLAID_SECRET (sandbox), PLAID_ENV=sandbox, PLAID_PRODUCTS=auth,transactions,identity, PLAID_COUNTRY_CODES=US,CA
DWOLLA_KEY, DWOLLA_SECRET, DWOLLA_BASE_URL=https://api-sandbox.dwolla.com, DWOLLA_ENV=sandbox

Never commit real keys. Regenerate any keys that were previously exposed.

### Secrets Scanning (Netlify)
Netlify will fail the build if secrets appear in the repo or build output.
We removed the committed `.env`. If you still see failures:
1. Verify no secrets are hard‑coded in source.
2. Configure environment variables in the Netlify UI (Site Settings → Build & Deploy → Environment).
3. (Optional) If a false positive occurs (e.g. test tokens), you can tune scanning via build env vars:
	- `SECRETS_SCAN_OMIT_PATHS` – comma list of folders to skip.
	- `SECRETS_SCAN_OMIT_KEYS` – comma list of env var names to ignore.
	- `SECRETS_SCAN_ENABLED=false` – last resort (not recommended).

### Build / Deploy (Netlify)
`netlify.toml` sets the base to `jsm_banking` and publishes `.next`.
Ensure all required env vars are added before triggering a production deploy.

### Auth & Build Shell
During static build, protected data is skipped (placeholder shell). At runtime, layout & pages fetch user + accounts.

### Lint / Formatting
ESLint core-web-vitals enabled; local config is root. Run:
```bash
npm run lint
```

### Regenerating Keys
If you accidentally exposed secrets previously:
1. Revoke / rotate in the provider dashboard.
2. Update the new values in Netlify env vars and locally.
3. Redeploy.

### License
Internal demo / educational use.
