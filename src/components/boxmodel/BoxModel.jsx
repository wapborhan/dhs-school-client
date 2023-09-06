import React from "react";

const BoxModel = (data) => {
  return (
    <div className="president border-2 border-[#fca120]">
      <div className="bg-[#fca120] p-2">
        <h2 className="text-center text-2xl text-white font-bold">
          {data ? data.tittle : "Tittle"}
        </h2>
      </div>
    </div>
  );
};

export default BoxModel;
