import React from "react";
import Notice from "./notice/Notice";
import AboutIns from "./about/AboutIns";
import Teachers from "./teacher/Teachers";
import Links from "./links/Links";

const HomePage = () => {
  return (
    <div className="space-y-4">
      <Notice />
      <AboutIns />
      <Links />
      <Teachers />
    </div>
  );
};

export default HomePage;
