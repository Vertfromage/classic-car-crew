"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface User {
  username: string;
  email: string;
  profilePic?: string;
}

interface Car {
  make: string;
  model: string;
  year: number;
  updates?: Update[];
}

interface Update {
  _id: string;
  title: string;
  description: string;
  date: string;
}

const CarProfile = ({ params }: { params: { user: string; car: string } }) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [carData, setCarData] = useState<Car | null>(null);

  useEffect(() => {
    const fetchUserAndCar = async () => {
      try {
        // const userResponse = await fetch(`/api/users/${params.user}`);
        // if (!userResponse.ok) throw new Error('Failed to fetch user');
        // const userData = await userResponse.json();

        // const carResponse = await fetch(`/api/users/${params.user}/cars/${params.car}`);
        // if (!carResponse.ok) throw new Error('Failed to fetch car');
        // const carData = await carResponse.json();

        const userData = {
          username: "Crystal Parker",
          email: "vertfromage@gmail.com",
          cars: [{ _id: "hudson-jet-1953", model: "Hudson Jet" }],
        };
        const carData = {
          make: "Hudson",
          model: "Jet",
          year: 1953,
          updates: [
            {
              _id: "update-1",
              title: "My first update",
              description: "Some description...",
              date: "May 3rd 2024",
            },
          ],
        };

        setUserData(userData);
        setCarData(carData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserAndCar();
  }, [params.user, params.car]);

  if (!userData || !carData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-4 h-screen shadow rounded-lg bg-white">
      <h1>Car Profile Page</h1>
      <p>
        Welcome to {userData.username}'s {carData.model} profile!
      </p>
      <div>
        <img
          src={
            userData.profilePic ||
            "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
          }
          alt="User Profile"
          className="w-24 h-24 rounded-full"
        />
        <h2>
          {carData.make} {carData.model} ({carData.year})
        </h2>
        {carData.updates && (
          <>
            <h3>Updates</h3>
            <ul>
              {carData.updates.map((update, index) => (
                <li key={index}>
                  <strong>{update.date}</strong>: {update.title} -{" "}
                  {update.description}
                  <Link href={`${window.location.pathname}/updates/${update._id}`}>View Update</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default CarProfile;