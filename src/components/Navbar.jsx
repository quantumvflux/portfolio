import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/portfolio" className="nav-element" id="nav-item">
            welcome
          </Link>
        </li>
        <li>
          <Link to="/myself" className="nav-element" id="nav-item">
            myself
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-element" id="nav-item">
            projects
          </Link>
        </li>
      </ul>
    </div>
  );
};
