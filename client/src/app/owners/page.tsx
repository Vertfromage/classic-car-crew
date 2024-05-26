"use client";

/** This is a page to show all owners */
const Owners = ({ params }: { params: { user: string } }) => {
  return (
    <div className="max-w-xl mx-auto p-4 shadow h-screen rounded-lg bg-white">
        <h1>Owners</h1>
        <p>
            Should map owners... using pagination
        </p>
        <p>
            Should have link to your own page..
        </p>
        <p> should be searchable... by location? </p>
    </div>
  );
};

export default Owners;
