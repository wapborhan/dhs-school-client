import React from "react";
import President from "./president/President";
import HeadTeacher from "./head-teacher/HeadTeacher";
import ImportantLinks from "./important-links/ImportantLinks";

const Sidebar = () => {
  return (
    <div className="space-y-4">
      <President />
      <HeadTeacher />
      <ImportantLinks />
    </div>
  );
};

export default Sidebar;
