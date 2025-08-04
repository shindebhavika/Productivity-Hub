import { ArrowUpRight } from "lucide-react";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FiBookOpen, FiUsers } from "react-icons/fi";

const GitHubUser = ({ user }) => {
  return (
  <div className="relative mt-8 mx-auto w-full max-w-sm rounded-2xl overflow-hidden p-6">
  <div className="flex flex-col items-center">
    <div className="relative w-28 h-28 mb-4">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-full h-full object-cover rounded-full border-4 border-purple-500 shadow-lg"
      />
     
    </div>

    <h2 className="text-2xl font-bold flex items-center gap-2">
      <FaGithub className="text-purple-500" /> {user.name || user.login}
    </h2>
<div className="flex items-center gap-1 text-sm mt-3">
  <a
    href={user.html_url}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline font-bold flex items-center gap-1"
  >
    @{user.login}
    <ArrowUpRight className="w-4 h-4" />
  </a>
</div>



    <p className="text-center text-sm mt-2 italic">
      {user.bio || "No bio available"}
    </p>

    <p className="text-sm mt-2 flex items-center justify-center gap-1">
      <FaMapMarkerAlt className="text-pink-500" />
      {user.location || "Location not available"}
    </p>
  </div>

  <div className="mt-6 border-t border-gray-700 pt-4 flex justify-around text-center">
    <div className="shadow-xl px-4 py-2 rounded transition">
      <p className="text-xl font-semibold text-purple-500 flex items-center gap-1 justify-center">
        <FiUsers /> {user.followers}
      </p>
      <p className="text-xs ">Followers</p>
    </div>
    <div className="shadow-xl px-4 py-2 rounded transition">
      <p className="text-xl font-semibold text-purple-500 flex items-center gap-1 justify-center">
        <FiBookOpen /> {user.public_repos}
      </p>
      <p className="text-xs ">Repos</p>

    </div>
  </div>
</div>
  );
};

export default GitHubUser;
