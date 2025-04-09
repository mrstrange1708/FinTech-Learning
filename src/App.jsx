import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Reels from "./components/Reels";
import Quiz from "./components/Quiz";
import FinTips from "./components/Fintip";
import Unit1 from "./pages/unit_1.jsx";
import Unit2 from "./pages/unit_2";
import Unit3 from "./pages/unit_3";
import Unit4 from "./pages/unit_4";
import Unit5 from "./pages/unit_5";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Reels />
              <Quiz />
              <FinTips />
            </>
          }
        />
        <Route path="/quiz/welcome" element={<Unit1 />} />
        <Route path="/quiz/budgeting" element={<Unit2 />} />
        <Route path="/quiz/goals" element={<Unit3 />} />
        <Route path="/quiz/banking" element={<Unit4 />} />
        <Route path="/quiz/taxes" element={<Unit5 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
