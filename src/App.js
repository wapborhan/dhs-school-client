import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NotFound from "./components/NotFound";
import Header from "./components/header/Header";
import HomaPage from "./pages/HomaPage";

function App() {
  return (
    <div className="page-wraper">
      <Header />
      <Routes>
        <Route path="/" element={<HomaPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
