import { useState } from "react";
import { useAuth, useUser } from "../../hooks/context/index";

function ProfileDetails({ user }) {
  // AUTH
  const { userDetails } = useAuth();

  // ****************************************************************************************************

  // USER
  const { users, followUserById, unfollowUserById, editUser } = useUser();

  // ****************************************************************************************************

  // STATE
  const [profileDetails, setProfileDetails] = useState({
    displayPicture: user.displayPicture,
    coverPicture: user.coverPicture,
    bio: user.bio,
    website: user.website,
  });

  const [largeImageVisibility, setLargeImageVisibility] = useState(false);

  const [editProfileFormVisibility, setEditProfileFormVisibility] =
    useState(false);

  // ****************************************************************************************************

  // EVENT HANDLERS
  const followUnfollowOnClickHandler = () => {
    doesLoggedInUserFollowUser()
      ? unfollowUserById(user._id)
      : followUserById(user._id);
  };

  const doesLoggedInUserFollowUser = () => {
    const loggedInUser = users.find(
      (user) => user.username === userDetails.username
    );

    if (
      loggedInUser.following.findIndex(
        (followingLoggedInUser) =>
          followingLoggedInUser.username === user.username
      ) >= 0
    )
      return true;
    else return false;
  };

  const editProfileOnClickHandler = () => {
    setEditProfileFormVisibility(!editProfileFormVisibility);
  };

  const saveProfileDetailsOnClickHandler = () => {
    editUser(profileDetails);
    setEditProfileFormVisibility(false);
  };

  const displayPictureOnChangeHandler = (e) => {
    setProfileDetails({
      ...profileDetails,
      displayPicture: e.target.value,
    });
  };

  const coverPictureOnChangeHandler = (e) => {
    setProfileDetails({
      ...profileDetails,
      coverPicture: e.target.value,
    });
  };

  const bioOnChangeHandler = (e) => {
    setProfileDetails({
      ...profileDetails,
      bio: e.target.value,
    });
  };

  const websiteOnChangeHandler = (e) => {
    setProfileDetails({
      ...profileDetails,
      website: e.target.value,
    });
  };

  // ****************************************************************************************************

  return (
    <>
      <div
        className="profile-background-picture relative"
        style={{
          height: "30rem",
          backgroundImage: `url(${user.coverPicture})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={user.displayPicture}
          alt={user.displayPicture.name}
          className="display-picture absolute"
          onClick={() => setLargeImageVisibility(true)}
        />
      </div>

      <div className="profile-details">
        <div className="profile-header-extended">
          <h1>{user.firstName + " " + user.lastName}</h1>
          <i
            className="fa-solid fa-circle-check"
            style={{ display: user.isVerified ? "block" : "none" }}
          ></i>
          {user.username === userDetails.username && (
            <span className="pointer">
              <i
                className="fa-solid fa-pen"
                onClick={editProfileOnClickHandler}
              ></i>
            </span>
          )}
          {user.username !== userDetails.username && (
            <button
              className={
                doesLoggedInUserFollowUser()
                  ? "btn btn-danger btn-squared btn-thin"
                  : "btn btn-primary btn-squared btn-thin"
              }
              onClick={followUnfollowOnClickHandler}
            >
              {doesLoggedInUserFollowUser() ? "Unfollow" : "Follow"}
            </button>
          )}
        </div>
        <p>
          <i className="fa-solid fa-at"></i> {user.username}
        </p>
        <p>
          <i className="fa-solid fa-circle-info"></i> {user.bio}
        </p>
        <p>
          <i className="fa-solid fa-link"></i>{" "}
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
        <div className={largeImageVisibility ? "modal modal-visible" : "modal"}>
          <div className="card-modal">
            <div className="relative">
              <button
                id="modal-close"
                className="round pointer btn btn-primary btn-floating badge badge-lg badge-inside-top-right"
                onClick={() => setLargeImageVisibility(false)}
              >
                <i className="fa-solid fa-times"></i>
              </button>
              <img
                className="image-responsive"
                src={user.displayPicture}
                alt={user.username}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={editProfileFormVisibility ? "modal modal-visible" : "modal"}
      >
        <div className="card-modal card-modal-post-input">
          <button
            id="modal-close"
            className="round pointer btn btn-primary btn-floating badge badge-lg badge-inside-top-right"
            onClick={() => setEditProfileFormVisibility(false)}
          >
            <i className="fa-solid fa-times"></i>
          </button>
          <div className="relative">
            <form className="edit-profile-form" action="">
              <label htmlFor={profileDetails.displayPicture}>
                <i className="fa-solid fa-image-portrait"></i> Display Picture:
                <input
                  type="text"
                  name={profileDetails.displayPicture}
                  value={profileDetails.displayPicture}
                  onChange={(e) => displayPictureOnChangeHandler(e)}
                />
              </label>
              <label htmlFor={profileDetails.coverPicture}>
                <i className="fa-solid fa-panorama"></i> Cover Picture:
                <input
                  type="text"
                  name={profileDetails.coverPicture}
                  value={profileDetails.coverPicture}
                  onChange={(e) => coverPictureOnChangeHandler(e)}
                />
              </label>
              <label htmlFor={profileDetails.bio}>
                <i className="fa-solid fa-circle-info"></i> Bio:
                <input
                  type="text"
                  name={profileDetails.bio}
                  value={profileDetails.bio}
                  onChange={(e) => bioOnChangeHandler(e)}
                />
              </label>
              <label htmlFor={profileDetails.website}>
                <i className="fa-solid fa-link"></i> Website:
                <input
                  type="text"
                  name={profileDetails.website}
                  value={profileDetails.website}
                  onChange={(e) => websiteOnChangeHandler(e)}
                />
              </label>
            </form>
            <div className="buttons-align">
              <button
                className="btn btn-primary btn-width-100"
                onClick={saveProfileDetailsOnClickHandler}
              >
                Save
              </button>
              <button
                className="btn btn-danger btn-width-100"
                onClick={() => setEditProfileFormVisibility(false)}
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ProfileDetails };
