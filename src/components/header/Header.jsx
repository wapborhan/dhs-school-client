import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

const Header = () => {
  return (
    <Fragment>
      <div className="topb-bar bg-[#1d2538] border-b-2 border-[#fca120] py-2 px-4 text-white flex justify-between">
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
      <div className="middle-bar py-4 px-4 flex justify-between">
        <div className="logo">
          <Link to="/">
            <img
              src="https://mdsobedalischool.com/wp-content/uploads/sites/3/2023/08/Md-Sobed-Ali-Secondery-School.svg"
              alt=""
              className="w-60"
            />
          </Link>
        </div>
        <div className="details flex gap-10">
          <div className="info">
            <div className="">স্থাপিত: ১৯৯৬ ইং</div>
            <div className="">ই.আই.আই.এন: 117464</div>
          </div>
          <div className="contact">
            <div className="email">test@gmail.com</div>
            <div className="number"> +88017123456789</div>
          </div>
        </div>
      </div>
      <div className="main-menu bg-[#1d2538] border-b-2 border-[#fca120] text-white">
        <div className="flex text-center">
          <Link to="" className="bg-[#fca120] py-2 px-4 flex-1">
            প্রথম পাতা
          </Link>
          <Link to="" className=" py-2 px-4 flex-1">
            আমাদের বিষয়
          </Link>
          <Link to="" className=" py-2 px-4 flex-1">
            কার্যাবলী
          </Link>
          <Link to="" className=" py-2 px-4 flex-1">
            একাডেমিক রেকর্ড
          </Link>
          <Link to="" className=" py-2 px-4 flex-1">
            ফলাফল
          </Link>
          <Link to="" className=" py-2 px-4 flex-1">
            ফটো
          </Link>{" "}
          <span to="" className=" py-2 px-4 flex-1">
            <div class="dropdown inline-block relative">
              <button class=" inline-flex items-center">
                <span class="mr-1">যোগাযোগ</span>
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </button>
              <ul class="dropdown-menu absolute hidden text-gray-700 pt-2 ">
                <li class="">
                  <a
                    class=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    One
                  </a>
                </li>
                <li class="">
                  <a
                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Two
                  </a>
                </li>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    test
                  </a>
                </li>
              </ul>
            </div>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
