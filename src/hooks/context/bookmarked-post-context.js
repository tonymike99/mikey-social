import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./index";

const defaultObj = {};
const BookmarkPostContext = createContext(defaultObj);

const BookmarkPostProvider = ({ children }) => {
  const { encodedToken } = useAuth();
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  useEffect(() => {
    if (encodedToken) {
      getAllBookmarkedPosts();
    }
  }, [encodedToken]);

  const getAllBookmarkedPosts = async () => {
    try {
      const params = {
        method: "get",
        url: "/api/users/bookmark",
        headers: {
          authorization: encodedToken,
        },
        data: {},
      };

      const getAllBookmarkedPostsResponse = await axios.request(params);

      if (getAllBookmarkedPostsResponse.status === 200) {
        setBookmarkedPosts(getAllBookmarkedPostsResponse.data.bookmarks);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const addPostToBookmarkedPosts = async (postId) => {
    try {
      const params = {
        method: "post",
        url: `/api/users/bookmark/${postId}`,
        headers: {
          authorization: encodedToken,
        },
        data: {},
      };

      const addPostToBookmarkedPostsResponse = await axios.request(params);

      if (addPostToBookmarkedPostsResponse.status === 200) {
        setBookmarkedPosts(addPostToBookmarkedPostsResponse.data.bookmarks);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const deletePostFromBookmarkedPosts = async (postId) => {
    try {
      const params = {
        method: "post",
        url: `/api/users/remove-bookmark/${postId}`,
        headers: {
          authorization: encodedToken,
        },
        data: {},
      };

      const deletePostFromBookmarkedPostsResponse = await axios.request(params);

      if (deletePostFromBookmarkedPostsResponse.status === 200) {
        setBookmarkedPosts(
          deletePostFromBookmarkedPostsResponse.data.bookmarks
        );
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const valueObj = {
    bookmarkedPosts,
    addPostToBookmarkedPosts,
    deletePostFromBookmarkedPosts,
  };

  // ****************************************************************************************************

  return (
    <BookmarkPostContext.Provider value={valueObj}>
      {children}
    </BookmarkPostContext.Provider>
  );
};

const useBookmarkPost = () => useContext(BookmarkPostContext);

export { BookmarkPostProvider, useBookmarkPost };
