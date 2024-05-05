const Update = ({ params }: { params: { owner: string, car: string, update:string } }) => {

    // Optionally, fetch user data from an API or database
    // useEffect(() => {
    //   fetchData(username);
    // }, [username]);
  
    return (
      <div>
        <h1>User Profile Page</h1>
        <p>Welcome to  {params.owner}'s {params.car} profile update {params.update} !</p>
        {/* Display user data here */}
      </div>
    );
  };
  
  export default Update;
  