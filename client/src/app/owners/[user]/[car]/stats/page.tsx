"use client";
import Link from "next/link";
// Assuming you have a method to determine the logged-in user's ID or username
import React, { useState, useEffect } from "react";

/** This is a page to show all owners */
const Stats = ({ params }: { params: { user: string } }) => {
  return (
    <div className="max-w-xl mx-auto p-4 shadow h-screen rounded-lg bg-white">
        <h1>Stats</h1>
        <p>Should show stats for car</p>
    </div>
  );
};

export default Stats;
