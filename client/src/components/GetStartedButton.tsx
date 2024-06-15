"use client";
import Link from "next/link";
import { formatNameForUrl } from "./formatNameForUrl";
import { useSession } from "next-auth/react";
import { SignIn } from "./signin";

export function GetStartedButton() {
  // Session for loggedIn User
  const { data: session } = useSession();
  const userName = session?.user?.name ?? "Default User";
  const loggedInUser = formatNameForUrl(userName);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const profileUrl = `${baseUrl}/owners/${loggedInUser}`;

  return (
    <>
      {session ? (
        <Link href={profileUrl}>
          <button className="px-8 py-2 bg-white text-blue-600 rounded-lg font-semibold shadow hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </Link>
      ) : (
        <SignIn />
      )}
    </>
  );
}
