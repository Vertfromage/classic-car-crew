"use client";
import { formatNameForUrl } from "@/components/formatNameForUrl";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

interface Update {
  _id?: string;
  title: string;
  description: string;
  date: string;
}

const UpdatePage = ({
  params,
}: {
  params: { user: string; car: string; update: string };
}) => {
  const [updateDetails, setUpdateDetails] = useState<Update | null>(null);

  // Session for loggedIn User
  const { data: session } = useSession();
  const userName = session?.user?.name ?? "Default User";
  const loggedInUser = formatNameForUrl(userName);

  const [isEditMode, setIsEditMode] = useState(false);
  const [update, setUpdate] = useState<Update>({
    title: "",
    description: "",
    date: "",
  });
  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(`/api/users/${params.user}/cars/${params.car}/updates/${params.update}`);
        // if (!response.ok) {
        //     throw new Error('Failed to fetch update details');
        // }
        // const data: UpdateDetails = await response.json();
        const data = {
          _id: "update-1",
          title: "My first update",
          description: "Some description...",
          date: "May 3rd 2024",
        };

        setUpdate(data);
      } catch (error) {
        console.error("Error fetching update details:", error);
      }
    };

    fetchData();
  }, [params.user, params.car, params.update]);

  if (!update) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-4 h-screen shadow rounded-lg bg-white">
      <h1>Update Details Page</h1>
      <p>
        Welcome to {params.user}'s {params.car} update!
      </p>
      <div>
        <h2>{update.title}</h2>
        <p>{update.description}</p>
        <p>Date: {update.date}</p>
      </div>

      {loggedInUser === params.user && (
        <>
          <button
            onClick={toggleEditMode}
            className="mt-4 mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {isEditMode ? "Cancel Edit" : "Edit Update"}
          </button>
        </>
      )}
      {isEditMode && (
        <form className="mt-4">
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
  );
};

export default UpdatePage;
