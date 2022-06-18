import { useState, useEffect, useContext } from "react";
import { getUsers } from "../utils/api";
import { UserContext } from "../contexts/User";

const UsersList = () => {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then(({ users }) => {
      setUsersList(users);
      setIsLoading(false);
    });
  }, []);

  const handleSelectClick = (username) => {
    setUser(username);
  };

  const handleSignOutClick = () => {
    setUser("");
  };

  if (isLoading) return <p className="loadingMsg">Fetching Users...</p>;

  return (
    <>
      <div className="switch-profile-panel">
        <h2 className="profile-heading">Who's reading?</h2>
        <ul className="UsersList">
          {usersList.map((user) => {
            return (
              <div key={user.username}>
                <li className="username">
                  <h3>{user.username}</h3>
                  <button onClick={() => handleSelectClick(user.username)}>
                    Select User
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="sign-out">
        <button className="sign-out-button" onClick={handleSignOutClick}>
          Sign out
        </button>
      </div>
    </>
  );
};
export default UsersList;
