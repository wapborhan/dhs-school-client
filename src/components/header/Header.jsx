import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <div className="topb-bar bg-[#1d2538] border-b-2 border-[#fca120] py-2 px-12 text-white flex justify-between">
        <div className="time">02:55:00 PM</div>
        <div className="top-menu flex gap-5">
          <div className="social">
            <ul className="flex gap-5">
              <li>FB</li>
              <li>TW</li>
              <li>LN</li>
              <li>YT</li>
            </ul>
          </div>
          <div className="panel">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      <div className="middle-bar py-4 px-12 flex justify-between">
        <div className="logo">
          <img
            src="https://mdsobedalischool.com/wp-content/uploads/sites/3/2023/08/Md-Sobed-Ali-Secondery-School.svg"
            alt=""
            className="w-60"
          />
        </div>
        <div className="details flex gap-10">
          <div className="info">
            <div className="">স্থাপিত: ১৯৯৬ ইং</div>
            <div className="">ই.আই.আই.এন: dsdsd</div>
          </div>
          <div className="contact">
            <div className="email">test@gmail.com</div>
            <div className="number"> +88017123456789</div>
          </div>
        </div>
      </div>
      <div className="main-menu bg-[#1d2538] border-b-2 border-[#fca120] text-white">
        <div className="flex ">
          <Link to="" className="bg-[#fca120] py-2 px-12 flex-1">
            প্রথম পাতা
          </Link>
          <Link to="" className=" py-2 px-12 flex-1">
            প্রথম পাতা
          </Link>
          <Link to="" className=" py-2 px-12 flex-1">
            প্রথম পাতা
          </Link>
          <Link to="" className=" py-2 px-12 flex-1">
            প্রথম পাতা
          </Link>
          <Link to="" className=" py-2 px-12 flex-1">
            প্রথম পাতা
          </Link>
          <Link to="" className=" py-2 px-12 flex-1">
            প্রথম পাতা
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
