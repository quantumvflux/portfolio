import { Routes, Route } from "react-router-dom";
import { Intro } from "./components/Intro";
import { Myself } from "./components/Myself";
import { Projects } from "./components/Projects";
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
          path="myself"
          element={
            <div>
              <Myself />
            </div>
          }
        />
        <Route
          path="projects"
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
