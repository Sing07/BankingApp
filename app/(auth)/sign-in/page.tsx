import AuthForm from "@/components/AuthForm"
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from 'react'

export default function SignIn() {
console.log("line 5");

  const u = getLoggedInUser()
  console.log(u, "line 9")
  return (
    <section className="flex-center size-full max-sm:px-6"><AuthForm type= "sign-in" /></section>
  )
}
