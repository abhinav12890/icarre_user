import React from "react";
import Navbar from "../../components/navbar2/Navbar"
import Search from "../search/Search"
import Chats from "../chats/Chats"

const Sidebar = () => {
  return (
    <div className="sidebar2">
      <Navbar />
      <Search/>
      <Chats/>
    </div>
  );
};

export default Sidebar;
