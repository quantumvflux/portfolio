import { Routes, Route } from "react-router-dom";
import { Intro } from "./components/Intro.jsx";
import { Myself } from "./components/Myself.jsx";
import { Projects } from "./components/Projects.jsx";
import "./App.css";

export const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Intro />
            </div>
          }
        />
        <Route
          path="/myself"
          element={
            <div>
              <Myself />
            </div>
          }
        />
        <Route
          path="/projects"
          element={
            <div>
              <Projects />
            </div>
          }
        />
      </Routes>
    </div>
  );
};
