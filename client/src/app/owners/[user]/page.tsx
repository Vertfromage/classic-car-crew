"use client";
import Link from "next/link";
// Assuming you have a method to determine the logged-in user's ID or username
import React, { useState, useEffect } from "react";

const UserProfile = ({ params }: { params: { user: string } }) => {
  interface Car {
    _id: string;
    model: string;
    // Add other relevant car properties
  }
  interface UserData {
    username: string;
    email: string;
    profilePic?: string;
    googleId?: string;
    facebookId?: string;
    cars?: Car[];
  }

  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [showAddCarForm, setShowAddCarForm] = useState(false);
  const [newCarModel, setNewCarModel] = useState("");

  const handleAddCar = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = { model: newCarModel };
  
    try {
      console.log(payload)
      // TODO Add car to server
        // const response = await fetch(`/api/users/${params.user}/cars`, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(payload),
        // });
  
        // if (!response.ok) {
        //     throw new Error('Failed to add car');
        // }
  
        // const addedCar = await response.json();
        // setUserData({...userData, cars: [...userData.cars, addedCar]});
        // setNewCarModel('');  // Reset the form
        // setShowAddCarForm(false);  // Hide the form
    } catch (error) {
        console.error("Error adding new car:", error);
    }
  };

  useEffect(() => {
    // Simulating fetching user data
    const fetchUserData = async () => {
      // TODO Replace with actual fetch call
      //const response = await fetch(`/api/users/${params.user}`);
      //const data = await response.json();
      // TODO fetch user cars too!

      const data = {
        username: "Bob farts",
        email: "fartyface@gmail.com", // shouldn't actually show... should be encrypted at rest
        cars: [{ _id: "hudson-jet-1953", model: "Hudson Jet" }],
      };

      setUserData(data);
      // Placeholder: Replace with actual logged-in user retrieval logic - using session
      setLoggedInUser("bob-farts");
    };

    fetchUserData();
  }, [params.user]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const toggleCarForm = () => {
    setShowAddCarForm((prev) => !prev);
  };

  return (
    <div className="max-w-xl mx-auto p-4 shadow rounded-lg h-screen bg-white">
      <h1 className="text-2xl font-bold">
        {userData.username || params.user} Profile Page
      </h1>
      <p>Welcome to {userData.username || params.user}&apos;s profile!</p>
      <img
        src={
          userData.profilePic ||
          "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
        }
        alt="Profile"
        className="w-24 h-24 rounded-full"
      />
      <div>
        <p>Email: {userData.email}</p>
      </div>

      {userData.cars && (
        <div>
          <h2>Cars</h2>
          <ul>
            {userData.cars.map((car) => (
              <li key={car._id}>
                {car.model} - <Link href={`${window.location.pathname}/${car._id}`}>View Car</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {loggedInUser === params.user && (
        <>
        <button
          onClick={toggleEditMode}
          className="mt-4 mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {isEditMode ? "Cancel Edit" : "Edit Profile"}
        </button>
         <button onClick={toggleCarForm} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
         Add New Car
     </button>
     </>
      )}
      {isEditMode && (
        <form className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            defaultValue={userData.username}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            defaultValue={userData.email}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="mt-4 mx-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save Changes
          </button>
        </form>
      )}
              {showAddCarForm && (
            <form onSubmit={handleAddCar} className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">Car Model</label>
                <input type="text" value={newCarModel} onChange={(e) => setNewCarModel(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
                <button type="submit" className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    Add Car
                </button>
            </form>
        )}
    </div>
  );
};

export default UserProfile;
