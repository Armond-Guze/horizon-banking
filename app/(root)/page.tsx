import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[
          {
            $id: "1",
            accountId: "1",
            bankId: "1",
            accessToken: "",
            fundingSourceUrl: "",
            userId: "1",
            sharableId: "1",
            id: "1",
            availableBalance: 0,
            currentBalance: 123.5,
            officialName: "",
            mask: "",
            institutionId: "",
            name: "Bank 1",
            type: "",
            subtype: "",
            appwriteItemId: "",
          },
          {
            $id: "2",
            accountId: "2",
            bankId: "2",
            accessToken: "",
            fundingSourceUrl: "",
            userId: "1",
            sharableId: "2",
            id: "2",
            availableBalance: 0,
            currentBalance: 500,
            officialName: "",
            mask: "",
            institutionId: "",
            name: "Bank 2",
            type: "",
            subtype: "",
            appwriteItemId: "",
          },
        ]}
      />
    </section>
  );
};

export default Home;
