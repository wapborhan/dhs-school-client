import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomaPage from "./pages/HomaPage";

function App() {
  return (
    <div className="page-wraper">
      <Header />
      <Routes>
        <Route path="/" element={<HomaPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
