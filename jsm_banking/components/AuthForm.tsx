"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
// Server actions are invoked via API routes to keep this a client component without importing 'use server' files
import PlaidLink from "./PlaidLink";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter()
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formSchema = authFormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
  setIsLoading(true);
  setError(null);

    try {
      // Signup with appwrite & create plain Link Token
      if (type === 'sign-up') {
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          address1: data.address1!,
          city: data.city!,
          state: data.state!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
          ssn: data.ssn!,
          email: data.email,
          password: data.password
        }
  
        try {
          const res = await fetch('/api/auth/sign-up', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userData)
          });
          const json = await res.json();
          if (!json.ok) {
            throw new Error(json.error || 'Sign up failed');
          }
          const newUser = json.user;
          if(!newUser || !newUser.$id){
            setError('Sign up failed (no user returned). Please retry.');
            return;
          }
          setUser(newUser)
        } catch(e: any){
          const msg = e?.message || '';
          let friendly = msg;
          if (/duplicate email/i.test(msg)) friendly = 'That email is already registered. Try signing in instead.';
          else if (/dwolla/i.test(msg)) friendly = 'Problem creating bank profile (Dwolla). Double‑check identity fields and try again.';
          else if (/appwrite/i.test(msg)) friendly = 'Internal identity service error. Please retry shortly.';
          else if (/missing required fields/i.test(msg)) friendly = 'Please fill all required fields.';
          if (!friendly) friendly = 'Sign up failed. Please verify your details and try again.';
          // In dev, append original stage context if present
          if (process.env.NODE_ENV !== 'production' && msg !== friendly) {
            friendly += `\nDetails: ${msg}`;
          }
          setError(friendly);
          return;
        }
      } 
      
      if (type === 'sign-in') {
        try {
          const res = await fetch('/api/auth/sign-in', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: data.email, password: data.password })
          });
          const json = await res.json();
          if(!json.ok){
            setError('Invalid email or password.');
            return;
          }
          router.push('/')
        } catch(e: any){
          setError(e?.message || 'Unable to sign in.');
          return;
        }
      }
    } catch (error) {
      console.log(error)
      setError('Unexpected error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {error && (
        <p className="text-14 text-red-500" role="alert">{error}</p>
      )}
      {user ? (
        <div className="flex flex-col gap-4">
          <PlaidLink user={user} variant="primary" />
          </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="Enter Your first name"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter Your last name"
                    />
                  </div>

                  <CustomInput
                    control={form.control}
                    name="address1"
                    label="Address"
                    placeholder="Enter Your specific address"
                  />

                  <CustomInput
                    control={form.control}
                    name="city"
                    label="City"
                    placeholder="Enter Your city"
                  />

                <div className="flex gap-4">
                  <CustomInput
                    control={form.control}
                    name="state"
                    label="State"
                    placeholder="Example: NY"
                  />
                  <CustomInput
                    control={form.control}
                    name="postalCode"
                    label="Postal Code"
                    placeholder="Example: 11101"
                  />
                </div>

                <div className="flex gap-4">
                  <CustomInput
                    control={form.control}
                    name="dateOfBirth"
                    label="Date Of Birth"
                    placeholder="yyyy-mm-dd"
                  />
                  <CustomInput
                    control={form.control}
                    name="ssn"
                    label="SSN"
                    placeholder="Example: 1234"
                  />
                </div>
                </>
                
              )}
              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter Your Email"
              />

              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter Your Password"
              />

              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="form-link"
            >
              {type === "sign-in" ? "Sign up" : "Sign in"}
            </Link>
          </footer>
        </>
       )} 
    </section>
  );
};

export default AuthForm;
