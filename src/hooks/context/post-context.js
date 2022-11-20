import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../../hooks/context/index";

const defaultObj = {};
const PostContext = createContext(defaultObj);

const PostProvider = ({ children }) => {
  const { encodedToken } = useAuth();
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    try {
      const params = {
        method: "get",
        url: "/api/posts",
      };

      const getAllPostsResponse = await axios.request(params);

      if (getAllPostsResponse.status === 200) {
        setPosts(getAllPostsResponse.data.posts);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const getAllUserPosts = async (username) => {
    try {
      const params = {
        method: "get",
        url: `/api/posts/user/${username}`,
        headers: {
          authorization: encodedToken,
        },
      };

      const getAllUserPostsResponse = await axios.request(params);

      if (getAllUserPostsResponse.status === 200) {
        setPosts(getAllUserPostsResponse.data.posts);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const getPostById = async (postId) => {
    try {
      const params = {
        method: "get",
        url: `/api/posts/${postId}`,
        headers: {
          authorization: encodedToken,
        },
      };

      const getPostResponse = await axios.request(params);

      if (getPostResponses.status === 200) {
        setPost(getPostResponse.data.post);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const createPost = async (postData) => {
    try {
      const params = {
        method: "post",
        url: "/api/posts",
        data: { postData },
        headers: {
          authorization: encodedToken,
        },
      };

      const createPostResponse = await axios.request(params);

      if (createPostResponse.status === 201) {
        setPosts(createPostResponse.data.posts);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const editPost = async (postData, postId) => {
    try {
      const params = {
        method: "post",
        url: `/api/posts/edit/${postId}`,
        data: { postData },
        headers: {
          authorization: encodedToken,
        },
      };

      const editPostResponse = await axios.request(params);

      if (editPostResponse.status === 201) {
        setPosts(editPostResponse.data.posts);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const deletePost = async (postId) => {
    try {
      const params = {
        method: "delete",
        url: `/api/posts/${postId}`,
        headers: {
          authorization: encodedToken,
        },
      };

      const deletePostResponse = await axios.request(params);

      if (deletePostResponse.status === 201) {
        setPosts(deletePostResponse.data.posts);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const likePost = async (postId) => {
    try {
      const params = {
        method: "post",
        url: `/api/posts/like/${postId}`,
        headers: {
          authorization: encodedToken,
        },
        data: {},
      };

      const likePostResponse = await axios.request(params);

      if (likePostResponse.status === 201) {
        setPosts(likePostResponse.data.posts);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const dislikePost = async (postId) => {
    try {
      const params = {
        method: "post",
        url: `/api/posts/dislike/${postId}`,
        headers: {
          authorization: encodedToken,
        },
        data: {},
      };

      const dislikePostResponse = await axios.request(params);

      if (dislikePostResponse.status === 201) {
        setPosts(dislikePostResponse.data.posts);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const addCommentToPost = async (postId, commentData) => {
    try {
      const params = {
        method: "post",
        url: `/api/comments/add/${postId}`,
        data: { commentData },
        headers: {
          authorization: encodedToken,
        },
      };

      const addCommentToPostResponse = await axios.request(params);
      if (addCommentToPostResponse.status === 201) {
        setPosts(addCommentToPostResponse.data.posts);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const deleteCommentFromPost = async (postId, commentId) => {
    try {
      const params = {
        method: "delete",
        url: `/api/comments/delete/${postId}/${commentId}`,
        headers: {
          authorization: encodedToken,
        },
      };

      const deleteCommentFromPostResponse = await axios.request(params);
      if (deleteCommentFromPostResponse.status === 201) {
        setPosts(deleteCommentFromPostResponse.data.posts);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const valueObj = {
    posts,
    post,
    getAllUserPosts,
    getPostById,
    createPost,
    editPost,
    deletePost,
    likePost,
    dislikePost,
    addCommentToPost,
    deleteCommentFromPost,
  };

  // ****************************************************************************************************

  return (
    <PostContext.Provider value={valueObj}>{children}</PostContext.Provider>
  );
};

const usePost = () => useContext(PostContext);

export { PostProvider, usePost };
