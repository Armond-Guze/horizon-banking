import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from "react-plaid-link";
import { useRouter } from "next/navigation";
import { createLinkToken, exchangePublicToken } from "@/lib/actions/user.actions";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
    const router = useRouter();
    const [token, setToken] = useState('');

    useEffect(() => {
      const getLinkToken = async () => {
          try {
              const linkToken = await createLinkToken(user);
              console.log('Link Token:', linkToken);
              setToken(linkToken);
          } catch (error) {
              console.error('Error fetching link token:', error);
          }
      };
  
      getLinkToken();
  }, [user]);

    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
        try {
            await exchangePublicToken({
                publicToken: public_token,
                user,
            });
            router.push('/');
        } catch (error) {
            console.error('Error exchanging public token:', error); // Add this line
        }
    }, [user, router]);

    const config: PlaidLinkOptions = {
        token,
        onSuccess,
    };


    console.log('Plaid Link Config:', config);
    const { open, ready } = usePlaidLink(config);
    console.log('Plaid Link ready:', ready); // Add this line

    return (
        <>
            {variant === "primary" ? (
                <Button
                    onClick={() => open()}
                    disabled={!ready}
                    className="plaidlink-primary"
                >
                    Connect bank
                </Button>
            ) : variant === "ghost" ? (
                <Button>
                    Connect bank
                </Button>
            ) : (
                <Button>
                    Connect bank
                </Button>
            )}
        </>
    );
};

export default PlaidLink;
