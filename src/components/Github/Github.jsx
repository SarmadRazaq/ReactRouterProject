import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = React.useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/sarmadrazaq")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   });
  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github Followers: {data.followers}
        <div className="flex justify-center align-center py-3">
          <img src={data.avatar_url} alt="Github" width={300} />
        </div>
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sarmadrazaq");
  return response.json();
};
