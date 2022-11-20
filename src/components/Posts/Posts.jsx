import { Post } from "../index";
import { useLocation } from "react-router-dom";

function Posts({ filteredPosts, users }) {
  // LOCATION
  const location = useLocation();

  // ****************************************************************************************************

  // HELPER FUNCTIONS
  const getUserFromPost = (post) => {
    return users.find((user) => user.username === post.username);
  };

  const emptyPostsFiller = () => {
    if (location.pathname === "/")
      return (
        <h3>
          Feed is empty! :( <br /> You have to follow a profile first
        </h3>
      );
    else if (location.pathname.startsWith("/explore"))
      return <h3>Nothing more to explore :(</h3>;
    else return <h3>You have no posts :(</h3>;
  };

  const postsTitle = () => {
    if (location.pathname === "/")
      return <h2 className="text-center margin-bottom-2">My feed</h2>;
    else if (location.pathname.startsWith("/explore"))
      return <h2 className="text-center margin-bottom-2">Posts</h2>;
  };

  // ****************************************************************************************************

  return (
    <>
      {filteredPosts.length > 0 ? (
        <>
          {postsTitle()}
          {filteredPosts.reverse().map((filteredPost) => (
            <Post
              key={filteredPost._id}
              post={filteredPost}
              user={getUserFromPost(filteredPost)}
            />
          ))}
        </>
      ) : (
        <div className="empty-posts-container">{emptyPostsFiller()}</div>
      )}
    </>
  );
}

export { Posts };
