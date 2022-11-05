import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../../hooks/context/index";

const defaultObj = {};
const UserContext = createContext(defaultObj);

const UserProvider = ({ children }) => {
  const { encodedToken } = useAuth();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [followedUnfollowedUser, setFollowedUnfollowedUser] = useState({});

  useEffect(() => {
    getAllUsers();
  }, [user]);

  const getAllUsers = async () => {
    try {
      const params = {
        method: "get",
        url: "/api/users",
      };

      const getAllUsersResponse = await axios.request(params);

      if (getAllUsersResponse.status === 200) {
        setUsers(getAllUsersResponse.data.users);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const getUserById = async (userId) => {
    try {
      const params = {
        method: "get",
        url: `/api/users/${userId}`,
      };

      const getUserByIdResponse = await axios.request(params);

      if (getUserByIdResponse.status === 200) {
        setUser(getUserByIdResponse.data.user);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const editUser = async (userData) => {
    try {
      const params = {
        method: "post",
        url: "/api/users/edit",
        data: { userData },
        headers: {
          authorization: encodedToken,
        },
      };

      const editUserResponse = await axios.request(params);

      if (editUserResponse.status === 201) {
        setUser(editUserResponse.data.user);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const followUserById = async (userId) => {
    try {
      const params = {
        method: "post",
        url: `/api/users/follow/${userId}`,
        headers: {
          authorization: encodedToken,
        },
      };

      const followUserResponse = await axios.request(params);

      if (followUserResponse.status === 200) {
        setUser(followUserResponse.data.user);
        setFollowedUnfollowedUser(followUserResponse.data.followUser);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const unfollowUserById = async (userId) => {
    try {
      const params = {
        method: "post",
        url: `/api/users/unfollow/${userId}`,
        headers: {
          authorization: encodedToken,
        },
      };

      const unfollowUserResponse = await axios.request(params);

      if (unfollowUserResponse.status === 200) {
        setUser(unfollowUserResponse.data.user);
        setFollowedUnfollowedUser(unfollowUserResponse.data.followUser);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const valueObj = {
    users,
    user,
    followedUnfollowedUser,
    getUserById,
    editUser,
    followUserById,
    unfollowUserById,
  };

  // ****************************************************************************************************

  return (
    <UserContext.Provider value={valueObj}>{children}</UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
