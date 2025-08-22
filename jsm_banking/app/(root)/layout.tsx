import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

// During a static production build there is no request context/cookies.
// Attempting to fetch the logged in user & redirect causes prerender failures
// for /404 and /500. We gate the redirect logic so build can succeed.
const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build' || process.env.NETLIFY === 'true' && process.env.CONTEXT === 'build';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  if (isBuildTime) {
    // Skip auth lookup entirely so static error pages can prerender.
    return (
      <main className="flex h-screen w-full font-inter">
        <div className="flex size-full flex-col items-center justify-center p-6 text-center text-sm text-gray-500">
          <Image src="/icons/logo.svg" width={48} height={48} alt="logo" className="mb-4" />
          <p>Build time shell – authenticated layout rendered at runtime.</p>
          {children}
        </div>
      </main>
    );
  }

  console.time('getLoggedInUser');
  const loggedIn = await Promise.race([
    getLoggedInUser(),
    new Promise<null>((resolve) => setTimeout(() => resolve(null), 4000)),
  ]);
  console.timeEnd('getLoggedInUser');
  if (loggedIn === null) {
    console.warn('getLoggedInUser returned null or timed out');
  }

  if (!loggedIn) {
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