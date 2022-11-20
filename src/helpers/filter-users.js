const filterUsersByType = (users, filterType, username) => {
  let filteredUsers = [];

  const loggedInUser = users.find((user) => user.username === username);

  const doesLoggedInUserFollowUser = (user) => {
    if (
      loggedInUser.following.findIndex(
        (followingLoggedInUser) =>
          followingLoggedInUser.username === user.username
      ) >= 0
    )
      return true;
    else return false;
  };

  switch (filterType) {
    case "users that loggedInUser is not following":
      filteredUsers = [...users].filter(
        (user) =>
          user.username !== loggedInUser.username &&
          !doesLoggedInUserFollowUser(user)
      );
      break;

    default:
      filteredUsers = [...users];
  }

  return filteredUsers;
};

export { filterUsersByType };
