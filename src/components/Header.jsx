import { useContext } from "react";
import { UserContext } from "../contexts/User";

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="Header">
      <h1>NewsSpace/</h1>
      <p>Hello {user}!</p>
    </div>
  );
};
export default Header;
