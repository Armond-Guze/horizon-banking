import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from "react-plaid-link";
import { useRouter } from "next/navigation";
import { createLinkToken, exchangePublicToken } from "@/lib/actions/user.actions";

// Simple helper to map Plaid errors to friendlier copy
function formatPlaidError(err: any): string {
    if (!err) return 'Unknown error';
    const code = err.error_code || err.code;
    switch (code) {
        case 'INVALID_PHONE_NUMBER':
        case 'ITEM_LOGIN_REQUIRED':
            return 'Plaid could not verify the phone number. Double‑check the number on your bank profile or choose a different verification option.';
        case 'INVALID_API_KEYS':
            return 'Plaid API keys are invalid. Check your environment variables.';
        default:
            return err.error_message || err.message || 'Something went wrong linking your bank.';
    }
}

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
    const router = useRouter();
    const [token, setToken] = useState('');
    const [loadingToken, setLoadingToken] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [sandboxLoading, setSandboxLoading] = useState(false);

    useEffect(() => {
            const getLinkToken = async (institutionId?: string) => {
          setLoadingToken(true);
          setError(null);
          try {
              const linkToken = await createLinkToken(user, institutionId ? { institutionId } : undefined);
              setToken(linkToken);
          } catch (err: any) {
              console.error('Error fetching link token:', err);
              setError(err?.message || 'Could not initialize bank linking. Please refresh and try again.');
          } finally {
            setLoadingToken(false);
          }
      };
            if (user?.$id) getLinkToken();
  }, [user?.$id, user]);

        const loadSandboxInstitution = async () => {
            setSandboxLoading(true);
            setError(null);
            try {
                // First Platypus Bank sandbox institution id (example: ins_109508)
                await new Promise(r=>setTimeout(r,150)); // small debounce
                const linkToken = await createLinkToken(user, { institutionId: 'ins_109508' });
                setToken(linkToken);
            } catch (err: any) {
                console.error('Sandbox institution token error:', err);
                setError(err?.message || 'Failed to prepare sandbox test bank.');
            } finally {
                setSandboxLoading(false);
            }
        }

    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
        try {
            setError(null);
            await exchangePublicToken({
                publicToken: public_token,
                user,
            });
            router.push('/');
        } catch (err) {
            console.error('Error exchanging public token:', err);
            setError(formatPlaidError(err));
        }
    }, [user, router]);

    const config: PlaidLinkOptions = {
        token,
        onSuccess,
    };


    console.log('Plaid Link Config:', config);
        const { open, ready, error: plaidHookError } = usePlaidLink(config);
        useEffect(()=>{
            if (plaidHookError) {
                setError(formatPlaidError(plaidHookError));
            }
        },[plaidHookError]);
    console.log('Plaid Link ready:', ready); // Add this line

    return (
        <>
            {error && (
              <p className="text-14 text-red-500 mb-2 max-w-xs">{error}</p>
            )}
                        {variant === "primary" ? (
                <Button
                    onClick={() => open()}
                    disabled={!ready || loadingToken || !!error}
                    className="plaidlink-primary"
                >
                    {loadingToken ? 'Loading…' : 'Connect bank'}
                </Button>
            ) : variant === "ghost" ? (
                <Button disabled={!ready || loadingToken || !!error}>
                    {loadingToken ? 'Loading…' : 'Connect bank'}
                </Button>
            ) : (
                <Button disabled={!ready || loadingToken || !!error}>
                    {loadingToken ? 'Loading…' : 'Connect bank'}
                </Button>
            )}
                                    <div className="mt-3 flex flex-col gap-3">
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            onClick={loadSandboxInstitution}
                                            disabled={sandboxLoading || loadingToken}
                                            className="text-14 underline"
                                        >
                                            {sandboxLoading ? 'Preparing sandbox…' : 'Use Sandbox Test Bank'}
                                        </Button>
                                        <div className="rounded-md border border-gray-200 p-3 text-12 text-gray-600 leading-relaxed bg-white/50">
                                            <p className="font-semibold text-gray-700 mb-1">Sandbox test credentials</p>
                                            <p><span className="font-medium">Username:</span> <code className="font-mono">user_good</code></p>
                                            <p><span className="font-medium">Password:</span> <code className="font-mono">pass_good</code></p>
                                            <p><span className="font-medium">MFA code (if asked):</span> 1234</p>
                                            <p className="mt-1 text-gray-500">These only appear in sandbox for demo/resume purposes.</p>
                                        </div>
                                    </div>
        </>
    );
};

export default PlaidLink;
