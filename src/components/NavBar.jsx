import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link className="navBarLink" to="/">
        All
      </Link>
      <Link className="navBarLink" to="/coding">
        Coding
      </Link>
      <Link className="navBarLink" to="/football">
        Football
      </Link>
      <Link className="navBarLink" to="/cooking">
        Cooking
      </Link>
      <Link className="navBarLink" to="/users">
        Switch User
      </Link>
    </nav>
  );
};
export default NavBar;
