// import { signIn, signOut } from "@/auth"
import { signIn, signOut } from "next-auth/react";

export function SignIn() {
  return (
    <form
      action={() => {
        // "use server"
        signIn("github");
      }}
    >
      <button
        className=" px-8 py-2 bg-white text-blue-600 rounded-lg font-semibold shadow hover:bg-gray-100 transition-colors"
        type="submit"
      >
        Signin with GitHub
      </button>
    </form>
  );
}

export function SignOut() {
  return (
    <form
      action={() => {
        // "use server"
        signOut();
      }}
    >
      <button
        className=" px-8 py-2 bg-white text-blue-600 rounded-lg font-semibold shadow hover:bg-gray-100 transition-colors"
        type="submit"
      >
        Signout
      </button>
    </form>
  );
}
