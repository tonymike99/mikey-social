const filterPostsByType = (posts, loggedInUser, filterType, username) => {
  let filteredPosts = [];

  switch (filterType) {
    case "posts from users that loggedInUser is following":
      filteredPosts = [...posts].filter(
        (post) =>
          loggedInUser.following.findIndex(
            (myUserFollowing) => myUserFollowing.username === post.username
          ) >= 0
      );
      break;

    case "posts from users that loggedInUser is not following":
      filteredPosts = [...posts].filter(
        (post) =>
          loggedInUser.following.findIndex(
            (myUserFollowing) => myUserFollowing.username === post.username
          ) === -1 && post.username !== loggedInUser.username
      );
      break;

    case "posts from loggedInUser":
      filteredPosts = [...posts]
        .filter((post) => loggedInUser.username === post.username)
        .reverse();
      break;

    case "posts from user":
      filteredPosts = [...posts]
        .filter((post) => post.username === username)
        .reverse();
      break;

    default:
      filteredPosts = [...posts];
  }

  return filteredPosts;
};

export { filterPostsByType };
