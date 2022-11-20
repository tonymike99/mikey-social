import "./Comments.css";
import { useState } from "react";
import { useUser } from "../../hooks/context/index";

function Comments({ post, user, addCommentToPost, deleteCommentFromPost }) {
  // USER
  const { users } = useUser();

  // ****************************************************************************************************

  // USESTATE
  const [textAreaInput, setTextAreaInput] = useState("");

  // ****************************************************************************************************

  // HELPER FUNCTIONS
  const textAreaInputOnChangeHandler = (e) => {
    setTextAreaInput(e.target.value);
  };

  const postCommentOnClickHandler = () => {
    const commentData = {
      username: user.username,
      comment: textAreaInput,
    };

    addCommentToPost(post._id, commentData);

    setTextAreaInput("");
  };

  const getCommentedUserProfilePicture = (username) => {
    const user = users.find((user) => user.username === username);
    return user !== undefined ? user.displayPicture : "";
  };

  // ****************************************************************************************************

  return (
    <div className="commentsWrapper">
      {post.comments.map((postComment) => (
        <div key={postComment._id} className="commentWrapper">
          <div className="commentInnerWrapper1">
            <img
              src={getCommentedUserProfilePicture(postComment.username)}
              alt={user.username}
              className="avatar xs round"
            />
            <h4>{"@" + postComment.username}</h4>
            <p>{postComment.comment}</p>
          </div>
          <div className="commentInnerWrapper2">
            {postComment.username === user.username && (
              <span
                className="pointer"
                onClick={() => deleteCommentFromPost(post._id, postComment._id)}
              >
                <i className="fa-solid fa-trash"></i>
              </span>
            )}
            <small>{postComment.createdAt}</small>
          </div>
        </div>
      ))}
      <div className="profilePicAndCommentInput">
        <img
          src={user.displayPicture}
          alt={user.username}
          className="avatar xs round"
        />
        <textarea
          className="comment-input"
          name=""
          id=""
          rows="1"
          placeholder="Enter your comment here"
          value={textAreaInput}
          onChange={textAreaInputOnChangeHandler}
        ></textarea>
        <button
          className={
            textAreaInput === ""
              ? "btn btn-primary disabled"
              : "btn btn-primary"
          }
          onClick={postCommentOnClickHandler}
        >
          Comment
        </button>
      </div>
    </div>
  );
}

export { Comments };
