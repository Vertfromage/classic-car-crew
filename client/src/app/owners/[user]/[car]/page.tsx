"use client";
import { formatNameForUrl } from "@/components/formatNameForUrl";
import { useSession } from "next-auth/react";
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
  _id?: string;
  title: string;
  description: string;
  date: string;
}

const CarProfile = ({ params }: { params: { user: string; car: string } }) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [carData, setCarData] = useState<Car | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showAddUpdateForm, setShowAddUpdateForm] = useState(false);

  const [update, setUpdate] = useState<Update>({
    title: "",
    description: "",
    date: "",
  });

  // Session for loggedIn User
  const { data: session } = useSession();
  const userName = session?.user?.name ?? "Default User";
  const loggedInUser = formatNameForUrl(userName);

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
          username: "Bob Farts",
          email: "fartyface@gmail.com",
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

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const toggleUpdateForm = () => {
    setShowAddUpdateForm((prev) => !prev);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdate((prevUpdate) => ({
      ...prevUpdate,
      [name]: value,
    }));
  };

  const handleAddUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your logic to handle the update submission
    console.log(update);

    const payload = { model: update };

    try {
      console.log(payload);
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
                  <Link
                    href={`${window.location.pathname}/updates/${update._id}`}
                  >
                    View Update
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        {loggedInUser === params.user && (
          <>
            <button
              onClick={toggleEditMode}
              className="mt-4 mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {isEditMode ? "Cancel Edit" : "Edit Car"}
            </button>
            <button
              onClick={toggleUpdateForm}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              {showAddUpdateForm ? "Cancel New Update" : "Add New Update"}
            </button>
          </>
        )}
        {isEditMode && (
          <form className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Car Model
            </label>
            <input
              type="text"
              value={carData.make}
              defaultValue={carData.make}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="mt-4 mx-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save Changes
            </button>
          </form>
        )}
        {showAddUpdateForm && (
          <form onSubmit={handleAddUpdate} className="mt-4">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={update.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={update.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={update.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add Update
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CarProfile;
