import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.time('getLoggedInUser');
  // Timeout wrapper so a hanging external call doesn't block the layout forever
  const loggedIn = await Promise.race([
    getLoggedInUser(),
    new Promise<null>((resolve) => setTimeout(() => resolve(null), 5000)),
  ]);
  console.timeEnd('getLoggedInUser');
  if (loggedIn === null) {
    console.warn('getLoggedInUser returned null or timed out');
  }

  if(!loggedIn) {
  // Let Next.js handle the redirect by throwing the redirect response
  redirect('/sign-in');
  }

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}