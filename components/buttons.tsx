"use client"

import { signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";

export function SignOutButton() {
  return (
    <Button onClick={() => signOut()}>
      <div className="">Sign Out</div>
    </Button>
  );
}

export function SignInButton() {
  return (
    <Button
      onClick={() => signIn("google")}
      className="flex items-center justify-items-center gap-3 w-full"
    >
      <FcGoogle className="text-2xl" />
      <div className="">Sign In with Google</div>
    </Button>
  );
}
