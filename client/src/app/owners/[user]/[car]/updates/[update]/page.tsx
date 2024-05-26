"use client";
import React, { useState, useEffect } from 'react';

interface UpdateDetails {
    title: string;
    description: string;
    date: string;
}

const Update = ({ params }: { params: { user: string, car: string, update: string } }) => {
    const [updateDetails, setUpdateDetails] = useState<UpdateDetails | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch(`/api/users/${params.owner}/cars/${params.car}/updates/${params.update}`);
                // if (!response.ok) {
                //     throw new Error('Failed to fetch update details');
                // }
                // const data: UpdateDetails = await response.json();
                const data =  {
                  _id: "update-1",
                  title: "My first update",
                  description: "Some description...",
                  date: "May 3rd 2024",
                }

                setUpdateDetails(data);
            } catch (error) {
                console.error("Error fetching update details:", error);
            }
        };

        fetchData();
    }, [params.user, params.car, params.update]);

    if (!updateDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div className="max-w-xl mx-auto p-4 h-screen shadow rounded-lg bg-white">
            <h1>Update Details Page</h1>
            <p>Welcome to {params.user}'s {params.car} update!</p>
            <div>
                <h2>{updateDetails.title}</h2>
                <p>{updateDetails.description}</p>
                <p>Date: {updateDetails.date}</p>
            </div>
        </div>
    );
};

export default Update;
