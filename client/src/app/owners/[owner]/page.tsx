const UserProfile = ({ params }: { params: { user: string } }) => {

  // Optionally, fetch user data from an API or database
  // useEffect(() => {
  //   fetchData(username);
  // }, [username]);

  return (
    <div>
      <h1>User Profile Page</h1>
      <p>Welcome to  {params.user}'s profile!</p>
      {/* Display user data here */}
    </div>
  );
};

export default UserProfile;
