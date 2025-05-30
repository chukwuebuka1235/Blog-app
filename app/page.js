"use server";

import { auth } from "@/auth";
import Link from "next/link";
import { SignInButton } from "./components/sign-in-button";
import { SignOutButton } from "./components/sign-out-button";
import { CredentialsSignIn } from "./components/credential-sign-in";
import HomePage from "./HomePage";

export default async function Home() {
  const session = await auth();
  console.log(session)

  if (session?.user) {
    return (
      <div style={{ color: 'var(--text) '}}>
        <HomePage />
      </div>
    );
  }

  return (
    <div style={{ color: 'var(--text)' }} >
  <div style={{ display: "grid", placeItems: "center",   minHeight: "80vh" }}className="">
    <div className=" p-6 shadow-md rounded-md ">
      <h1 className="mb-3 text-center bold"> Login to Create Your Blog</h1>   
      <div className="mb-3"><SignInButton /></div>
      <div><CredentialsSignIn /></div>
    </div>
  </div>
</div>
  );
}
