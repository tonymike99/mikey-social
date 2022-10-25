import { useState } from "react";

function ProfileDetails({ user }) {
  const [visibility, setVisibility] = useState(false);

  return (
    <div className="profile-details">
      <img
        src={user.profilePic}
        alt={user.profilePic.name}
        className="profile-pic-main"
        onClick={() => setVisibility(true)}
      />
      <div className="profile-name-isVerified">
        <h3>{user.firstName + " " + user.lastName}</h3>
        {user.isVerified && <i className="fa-solid fa-circle-check"></i>}
        <button className="btn btn-primary btn-follow">Follow</button>
      </div>
      <p>
        <i className="fa-solid fa-at"></i>
        {user.username}
      </p>
      <p>
        <i className="fa-solid fa-circle-info"></i>
        {user.bio}
      </p>
      <p>
        <i className="fa-solid fa-link" />
        <a href={user.website}>{user.website}</a>
      </p>
      <p>
        <i className="fa-solid fa-calendar-days"></i> Joined on{" "}
        {user.createdAt.slice(0, 9)}
      </p>
      <p>
        <i className="fa-solid fa-circle-arrow-right"></i> Followers{" "}
        {user.followers.length}
      </p>
      <p>
        <i className="fa-solid fa-circle-arrow-left"></i> Following{" "}
        {user.following.length}
      </p>

      <div className={visibility ? "modal modal-visible" : "modal"}>
        <div className="card-modal">
          <div className="relative">
            <button
              id="modal-close"
              className="round pointer btn btn-primary btn-floating badge badge-lg badge-inside-top-right"
              onClick={() => setVisibility(false)}
            >
              <i className="fa-solid fa-times"></i>
            </button>
            <img
              src={user.profilePic}
              alt={user.profilePic.username}
              className="profile-pic-main-enlarged"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProfileDetails };
