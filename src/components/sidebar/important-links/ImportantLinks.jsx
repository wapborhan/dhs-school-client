import React from "react";
import { Link } from "react-router-dom";

const ImportantLinks = () => {
  return (
    <div className="president border-2 border-[#fca120]">
      <div className="bg-[#fca120] p-2">
        <h2 className="text-center text-2xl text-white font-bold">
          গুরুত্বপূর্ণ লিংক
        </h2>
      </div>
      <div className="links">
        <ul class="w-full rounded-lg  text-blue-800">
          <li>
            <Link
              to="#"
              class="w-fill flex p-3 pl-3 border-b-2 border-[#fca120] hover:bg-slate-100 "
            >
              i<span class="ml-2 truncate">এনটিআরসিএ</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              class="w-fill flex p-3 border-b-2 border-[#fca120] hover:bg-slate-100"
            >
              i<span class="ml-2 truncate">মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর</span>
            </Link>
          </li>
          <li>
            <Link
              to=""
              class="w-fill flex p-3  border-[#fca120] hover:bg-slate-100"
            >
              i<span class="ml-2 truncate">শিক্ষা মন্ত্রণালয়</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImportantLinks;
