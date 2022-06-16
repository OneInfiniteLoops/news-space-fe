import { useContext } from "react";
import { UserContext } from "../contexts/User";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  return (
    <div className="Header">
      <h1>NewsSpace/ {user}</h1>
    </div>
  );
};
export default Header;
