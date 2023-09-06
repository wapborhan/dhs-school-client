import { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { Data } from "./assets/data/data";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./home/HomePage";
import NotFound from "./components/NotFound/NotFound";
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
