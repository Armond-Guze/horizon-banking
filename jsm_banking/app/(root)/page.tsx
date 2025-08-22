import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";

// Avoid hitting external services during build / when secrets are unavailable
const isBuildShell = !process.env.APPWRITE_DATABASE_ID || process.env.BUILD_TIME === '1';

// Define props locally since global declaration file isn't a module
type HomePageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Home = async ({ searchParams: { id } }: HomePageProps) => {
  try {
    if (isBuildShell) {
      return (
        <section className="home">
          <div className="home-content p-6 text-sm text-gray-500">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user="Guest"
              subtext="Runtime data (accounts & balances) loads after deployment."
            />
            <div className="mt-6 rounded-xl border border-gray-200 p-6">
              Build shell – no secrets loaded. Set environment variables in Netlify for live data.
            </div>
          </div>
        </section>
      );
    }
    const loggedIn = await getLoggedInUser();
    console.log('Logged In User:', loggedIn);

    if (!loggedIn || !loggedIn.$id) {
      throw new Error('User is not logged in or $id is undefined');
    }

    const accounts = await getAccounts({ userId: loggedIn.$id });
    console.log('Accounts:', accounts);

    const accountsData = accounts?.data || [];

    let account: any = null;
    let appwriteItemId: string | undefined;
    if (accountsData.length > 0) {
      appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
      console.log('appwriteItemId:', appwriteItemId);
      if (appwriteItemId) {
        account = await getAccount({ appwriteItemId });
        console.log('Account:', account);
      }
    }
    console.log({ accountsData, account });

    return (
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn.firstName || "Guest"}
              subtext="Access and manage your account and transactions efficiently."
            />

            {accountsData.length > 0 ? (
              <TotalBalanceBox 
                accounts={accountsData}
                totalBanks={accounts.totalBanks}
                totalCurrentBalance={accounts.totalCurrentBalance}
              />
            ) : (
              <div className="rounded-xl border border-gray-200 p-6 text-gray-600 text-14">
                No bank accounts linked yet. Click &quot;Add Bank&quot; in the sidebar after linking via Plaid.
              </div>
            )}
          </header>

          RECENT TRANSACTIONS
        </div>

        <RightSidebar  
          user={loggedIn}
          transactions={accounts?.transactions || []}
          banks={accountsData.slice(0, 2) as any}
        />
      </section>
    );
  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return <div>There was an error loading the data: {message}</div>;
  }
};

export default Home;
