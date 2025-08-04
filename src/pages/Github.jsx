import React, { useState } from "react";
import GitHubUser from "../components/ui/GithubUser";
// import GitHubUser from "./GitHubUser";
import { FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import { FiUsers, FiBookOpen } from "react-icons/fi";
import { ArrowUpRight, CircleArrowOutUpRight } from "lucide-react";

const Github = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    if (!username) {
      setError("Please enter a GitHub username");
      setUser(null);
      return;
    }

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="min-h-screen dark:text-white bg-gradient-to-br from-purple-200 to-pink-200 dark:from-gray-800  dark:to-gray-900 py-36 px-4">
      <div className="max-w-md mx-auto text-center space-y-4 ">
        <h1 className="text-3xl font-bold mb-2">Search a GitHub user to get started</h1>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="w-full px-4 py-2 rounded border focus:border-2 border-pink-200 transition-all focus:w-64 outline-none"
          />
          <button
            onClick={fetchUser}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>

        {loading && <p className="text-blue-500 mt-4">Loading...</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}

     {user && (
<GitHubUser user={user} />

)}

      </div>
   </div>
  );
};


export default Github;
