import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
