'use client';
import { SignIn, SignOut } from "@/components/signin";
import { useSession } from 'next-auth/react';
import Link from "next/link";
// Assuming you have a method to determine the logged-in user's ID or username
import React, { useState, useEffect } from "react";


/** This is a page to show all owners */
const AuthBar = () => {
  const { data: session, status } = useSession();
  return (
    <div className="bg-gray-800 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link className="text-white" href="/">Home</Link>
          </div>
          <div className="flex items-center space-x-4">
            {session ? (
              <>
                <SignOut />
              </>
            ) : (
              <SignIn />
            )}
          </div>
        </div>
      </div>
      {session && (
        <div>
          <p className="text-white">Session Info:</p>
          <pre className="text-white">{JSON.stringify(session, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AuthBar;
