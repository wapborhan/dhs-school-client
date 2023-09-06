import { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { Data } from "./assets/data/data";
import footImage from "./assets/images/footer-icon.png";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./home/HomePage";
import NotFound from "./components/NotFound/NotFound";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  // useEffect(() => {
  //   axios.get(Data).then((response) => {
  //     setMaindata(response);
  //   });
  // }, []);

  return (
    <Fragment>
      <div className="main-content container mx-auto px-20">
        <Header />
        <div
          className="content pb-28 bg-repeat-x  w-full bg-left-bottom bg-contain "
          style={{
            backgroundImage: `url(${footImage})`,
          }}
        >
          <div className="flex justify-between">
            <div className="pages basis-3/4 bg-black">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <div className="sidebar w-full basis-1/4">
              <Sidebar />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
