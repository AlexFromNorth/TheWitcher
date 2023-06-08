import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./output.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/screens/home/Home";
import Admin from "./components/screens/admin/Admin";
import { ModalProvider } from "./components/ModalProvider";
import Trailer from "./components/screens/trailer/Trailer";
import { Actors } from "./components/screens/actors/Actors";
import Games from "./components/screens/games/Games";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/trailer" element={<Trailer />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </Router>
    </ModalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
