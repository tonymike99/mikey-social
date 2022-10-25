function ProfileHeader({ post }) {
  return (
    <>
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
        <button className="btn btn-primary btn-follow">Follow</button>
      </div>
      <hr className="hr-thin" />
    </>
  );
}

export { ProfileHeader };
