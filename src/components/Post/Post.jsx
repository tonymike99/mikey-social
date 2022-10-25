function Post({ post }) {
  return (
    <div className="post-card">
      <div className="profile-header">
        <div className="profile-image-name-isVerified">
          <img
            src={post.profilePic}
            alt={post.profilePic.name}
            className="profile-pic"
          />
          <div>
            <div className="profile-name-isVerified">
              <h4>{post.name}</h4>
              {post.isVerified && <i className="fa-solid fa-circle-check"></i>}
            </div>
            <small>{"@" + post.username}</small>
          </div>
        </div>
      </div>

      <div className="post-body">
        <p>{post.content}</p>
        <small className="post-body text-grey">{post.createdAt}</small>
        <small>{post.likes.likeCount}</small>
      </div>

      <hr className="hr-thin" />

      <div className="post-footer">
        <span>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-regular fa-heart"></i>
          Likes
        </span>

        <span>
          <i className="fa-solid fa-comment-dots"></i>
          Comments
        </span>

        <span>
          <i className="fa-solid fa-pen"></i>
          Edit
        </span>

        <span>
          <i className="fa-solid fa-trash"></i>
          Delete
        </span>

        <span>
          <i className="fa-solid fa-bookmark"></i>
          <i className="fa-regular fa-bookmark"></i>
          Bookmark
        </span>
      </div>
    </div>
  );
}

export { Post };
