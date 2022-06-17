import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="Header">
      <h1>NewsSpace/</h1>
      <p>Hello {user}!</p>
      <Link className="switch-profiles-button" to="/users">
        Switch Profiles
      </Link>
    </div>
  );
};
export default Header;
