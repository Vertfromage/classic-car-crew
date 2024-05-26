"use client";
import Link from "next/link";
// Assuming you have a method to determine the logged-in user's ID or username
import React, { useState, useEffect } from "react";

/** This is a page to show all cars */
const AllCars = ({ params }: { params: { user: string } }) => {
  return (
    <div className="max-w-xl mx-auto p-4 shadow h-screen rounded-lg bg-white">
        <h1>Cars</h1>
        <p>
            Should map cars... using pagination
        </p>
        <p>
            Should have link to your own cars..
        </p>
        <p> should be searchable</p>
        <p> Each car should show it's latest update in summary form and owner... with links to car page, owner page and update page</p>
        <p> Should be sorted by latest update</p>
    </div>
  );
};

export default AllCars;