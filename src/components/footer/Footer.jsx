import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="bg-[#1d2538] text-white px-8 py-5">
        <div className="grid grid-cols-3">
          <div className="info flex flex-col items-center justify-center space-y-2">
            <img
              src="https://jessoreboard.gov.bd/jb_logo_new.png"
              alt=""
              className="w-20"
            />{" "}
            <h2>ধরমপুর মাধ্যমিক বিদ্যালয়</h2>
            <h2 className="">স্থাপিত: ১৯৯৬ ইং</h2>
            <h2 className="">ই.আই.আই.এন: 117464</h2>
          </div>
        </div>
      </div>
      <div className="credit bg-slate-900 text-center text-white py-3">
        Copyright © 2023 . All Rights Reserved.
      </div>
    </Fragment>
  );
};

export default Footer;
