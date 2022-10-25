import { Post } from "../index";

function Posts({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </>
  );
}

export { Posts };
