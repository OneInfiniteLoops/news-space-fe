import { useState, useEffect, useContext } from "react";
import { getUsers } from "../utils/api";
import { UserContext } from "../contexts/User";

const UsersList = () => {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then(({ users }) => {
      setUsersList(users);
      setIsLoading(false);
    });
  }, []);

  const handleClick = (username) => {
    console.log(username);
    setUser(username);
  };

  if (isLoading) return <p className="loadingMsg">Fetching Users...</p>;

  return (
    <>
      <h2 className="profile-heading">Profile</h2>
      <ul className="UsersList">
        {usersList.map((user) => {
          return (
            <div key={user.username}>
              <li className="username">
                <h3>{user.username}</h3>
                <button onClick={() => handleClick(user.username)}>
                  Select
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};
export default UsersList;
