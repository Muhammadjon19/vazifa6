import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/login/Login";
import Deteil from "./pages/deteil/Deteil";
import Deteil1 from "./pages/deteil1/Deteil1";
import Login1 from "./components/login1/Login1";
import Card from "./components/card/Card";
import Bosilish from "./pages/bosilish/Bosilish";
import Acount from "./pages/acount/Acount";
import Card1 from "./components/card1/Card1";
import Card2 from "./components/card2/Card2";
import Washlist from "./pages/washlist/Washlist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/deteil" element={<Deteil />} />
          <Route path="/deteil1" element={<Deteil1 />} />
          <Route path="/login1" element={<Login1 />} />
          <Route path="/card" element={<Card />} />
          <Route path="/bosilish" element={<Bosilish />} />
          <Route path="/acount" element={<Acount />} />
          <Route path="/card1" element={<Card1 />} />
          <Route path="/card2" element={<Card2 />} />
          <Route path="/washlist" element={<Washlist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
