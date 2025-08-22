"use client";

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('[GlobalError]', error);
  }, [error]);
  return (
    <html>
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="max-w-md text-sm text-gray-500">{error.message || 'Unexpected error occurred.'}</p>
        <button onClick={() => reset()} className="rounded bg-black px-4 py-2 text-white">Try again</button>
      </body>
    </html>
  );
}
