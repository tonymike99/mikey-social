import { PostMessage } from "../../components/index";
import { useState } from "react";

function EditPostModal({ user, editPost, post, setIsEditTrue }) {
  // USESTATE
  const [visibility, setVisibility] = useState("visible");

  // ****************************************************************************************************

  return (
    <div className={visibility ? "modal modal-visible" : "modal"}>
      <div className="card-modal card-modal-post-input">
        <button
          id="modal-close"
          className="round pointer btn btn-primary btn-floating badge badge-lg badge-inside-top-right"
          onClick={() => {
            setIsEditTrue(false);
            setVisibility(false);
          }}
        >
          <i className="fa-solid fa-times"></i>
        </button>
        <div className="relative">
          <PostMessage
            user={user}
            savePost={editPost}
            post={post}
            setIsEditTrue={setIsEditTrue}
            setVisibility={setVisibility}
          />
        </div>
      </div>
    </div>
  );
}

export { EditPostModal };
