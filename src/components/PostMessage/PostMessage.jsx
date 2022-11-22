import "./PostMessage.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function PostMessage({ user, savePost, post, setVisibility, setIsEditTrue }) {
  // STATE
  const [postTextValue, setPostTextValue] = useState(post?.text ?? "");
  const [postImageValue, setPostImageValue] = useState(post?.image ?? "");

  // ****************************************************************************************************

  // EVENT HANDLERS
  const textAreaOnInputHandler = (e) => {
    setPostTextValue(e.target.value);
  };

  const fileInputOnChangeHandler = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setPostImageValue(url);
  };

  const postMomentOnClickHandler = () => {
    const data = {
      text: postTextValue,
      image: postImageValue,
    };

    if (post === undefined) {
      savePost(data);
    } else {
      savePost(data, post._id);
      setIsEditTrue(false);
      setVisibility(false);
    }

    setPostTextValue("");
    setPostImageValue("");
  };

  // ****************************************************************************************************

  return (
    <div className="post-message-container">
      <div className="post-message-left">
        <Link to={`/profile/${user.username}`}>
          <img
            src={user.displayPicture}
            alt={user.username}
            className="avatar sm round"
          />
        </Link>
      </div>
      <div className="post-message-right">
        <div className="post-message-body">
          <textarea
            className="text-area"
            placeholder={`Hi ${user.firstName}, how's the day like?`}
            onChange={(e) => textAreaOnInputHandler(e)}
            value={postTextValue}
          ></textarea>
          {postImageValue !== "" && (
            <div className="post-message-image">
              <img
                src={postImageValue}
                alt={postImageValue}
                className="image-size-25"
              />
              <button
                className="pointer btn btn-secondary btn-floating badge badge-sm badge-inside-top-left image-close"
                onClick={() => setPostImageValue("")}
              >
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
          )}
        </div>
        <div className="post-message-footer">
          <label htmlFor="uploadImage">
            <span className="pointer">
              <i className="fa-solid fa-image fa-xl"></i>
            </span>
            <input
              type="file"
              accept="image/*"
              id="uploadImage"
              name="uploadImage"
              className="display-none"
              onChange={(e) => fileInputOnChangeHandler(e)}
            />
          </label>
          <button
            className={
              postTextValue === "" && postImageValue === ""
                ? "btn btn-light-outline disabled"
                : "btn btn-primary"
            }
            onClick={postMomentOnClickHandler}
          >
            <i className="fa-solid fa-paper-plane fa-lg" /> Post moment
          </button>
        </div>
      </div>
    </div>
  );
}

export { PostMessage };
