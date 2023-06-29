import React from "react";
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div> 
        <button>
          <HomeIcon className="flex items-center space-x-2 hover:text-white" />
          <p>Home</p>
        </button>
        <button>
          <SearchIcon className="flex items-center space-x-2 hover:text-white" />
          <p>Search</p>
        </button>
        <button>
          <LibraryIcon className="flex items-center space-x-2 hover:text-white" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <button>
          <HeartIcon className="flex items-center space-x-2 hover:text-white" />
          <p>Create Playlist</p>
        </button>
        <button>
          <LibraryIcon className="flex items-center space-x-2 hover:text-white" />
          <p>Liked Songs</p>
        </button>
        <button>
          <RssIcon className="flex items-center space-x-2 hover:text-white" />
          <p>Your episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
      </div>
    </div>
  );
}

export default Sidebar;
