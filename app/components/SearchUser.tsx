"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Userdetails from "./Userdetails";

function SearchUser() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (res.ok) {
        const user = await res.json();
        setUserData(user);
      } else {
        setUserData(null);
      }
    } catch (error) {
      console.error("Error in fetching user Details", error);
    }
  };
  return (
    <>
      <div className="w-full gap-10 flex flex-col items-center justify-between">
        <div className="bg-white w-full p-4 rounded-full flex flex-row">
          <input
            type="text"
            className="w-full h-full focus:outline-none text-sm md:text-md italic"
            placeholder="Username eg: @SudhanshuShrivastava04"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className="text-gray-400 hover:text-gray-500 hover:scale-150 duration-150"
            onClick={handleSearch}
          >
            <BiSearch />{" "}
          </button>
        </div>
        <div>
          {userData ? (
            <Userdetails user={userData} />
          ) : (
            <p>No such username found!</p>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchUser;
