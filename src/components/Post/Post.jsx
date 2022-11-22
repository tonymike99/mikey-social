import "./Post.css";
import { Link } from "react-router-dom";
import { EditPostModal, Comments } from "../index";
import { useAuth, usePost, useBookmarkPost } from "../../hooks/context/index";
import { useState } from "react";

function Post({ post, user }) {
  // AUTH
  const { userDetails } = useAuth();

  // ****************************************************************************************************

  // POST
  const {
    likePost,
    dislikePost,
    editPost,
    deletePost,
    addCommentToPost,
    deleteCommentFromPost,
  } = usePost();

  // ****************************************************************************************************

  // BOOKMARK POST
  const {
    bookmarkedPosts,
    addPostToBookmarkedPosts,
    deletePostFromBookmarkedPosts,
  } = useBookmarkPost();

  // ****************************************************************************************************

  // STATE
  const [isEditTrue, setIsEditTrue] = useState(false);

  const [isExpandComments, setIsExpandComments] = useState(false);

  // ****************************************************************************************************

  //EVENT HANDLERS
  const likeButtonOnClickHandler = () => {
    isPostLikedByUser ? dislikePost(post._id) : likePost(post._id);
  };

  const bookmarkButtonOnClickHandler = () => {
    isPostBookmarkedByUser
      ? deletePostFromBookmarkedPosts(post._id)
      : addPostToBookmarkedPosts(post._id);
  };

  const editButtonOnClickHandler = () => {
    setIsEditTrue(true);
  };

  const commentsButtonOnClickHandler = () => {
    setIsExpandComments(!isExpandComments);
  };

  const deleteButtonOnClickHandler = () => {
    deletePost(post._id);
  };

  // ****************************************************************************************************

  //HELPER FUNCTIONS
  const isPostLikedByUser =
    post.likes.likedBy.findIndex(
      (likedPost) => likedPost.username === userDetails.username
    ) >= 0;

  const isPostBookmarkedByUser =
    bookmarkedPosts.findIndex(
      (bookmarkedPost) => bookmarkedPost._id === post._id
    ) >= 0;

  // ****************************************************************************************************

  return (
    <div className="post-container">
      <Link to={`/profile/${user.username}`} style={{ color: "unset" }}>
        <div className="profile-header">
          <div>
            <img
              src={user.displayPicture}
              alt={user.username}
              className="avatar sm round"
            />
          </div>
          <div>
            <h4>{user.firstName + " " + user.lastName}</h4>
            <small>{"@" + user.username}</small>
          </div>
          <div>
            <i
              className="fa-solid fa-circle-check"
              style={{ visibility: user.isVerified ? "visible" : "hidden" }}
            ></i>
          </div>
        </div>
      </Link>

      <div className="post-body">
        <p>{post.text}</p>
        {post.image !== "" && (
          <img
            className="image-size-75 post-image"
            src={post.image}
            alt={post._id}
          />
        )}
        <small className="post-body text-grey">{post.createdAt}</small>
      </div>

      <hr className="hr-thin" />

      <div className="post-footer">
        <span className="pointer" onClick={likeButtonOnClickHandler}>
          <i
            className={
              isPostLikedByUser ? "fa-solid fa-heart" : "fa-regular fa-heart"
            }
          ></i>{" "}
          Likes <small>{post.likes.likeCount}</small>
        </span>
        <span className="pointer" onClick={commentsButtonOnClickHandler}>
          <i className="fa-solid fa-comment-dots"></i> Comments{" "}
          {isExpandComments ? (
            <i className="fa-solid fa-caret-down"></i>
          ) : (
            <i className="fa-solid fa-caret-right"></i>
          )}
        </span>
        {userDetails.username === post.username && (
          <>
            <span className="pointer" onClick={editButtonOnClickHandler}>
              <i className="fa-solid fa-pen"></i> Edit
            </span>
            {isEditTrue && (
              <EditPostModal
                user={user}
                editPost={editPost}
                post={post}
                setIsEditTrue={setIsEditTrue}
              />
            )}
          </>
        )}
        {userDetails.username === post.username && (
          <span className="pointer" onClick={deleteButtonOnClickHandler}>
            <i className="fa-solid fa-trash"></i> Delete
          </span>
        )}
        <span className="pointer" onClick={bookmarkButtonOnClickHandler}>
          <i
            className={
              isPostBookmarkedByUser
                ? "fa-solid fa-bookmark"
                : "fa-regular fa-bookmark"
            }
          ></i>{" "}
          Bookmark
        </span>
      </div>

      {isExpandComments && (
        <Comments
          post={post}
          user={user}
          addCommentToPost={addCommentToPost}
          deleteCommentFromPost={deleteCommentFromPost}
        />
      )}
    </div>
  );
}

export { Post };
