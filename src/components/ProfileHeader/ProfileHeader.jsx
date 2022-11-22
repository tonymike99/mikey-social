import { Link } from "react-router-dom";
import { useAuth, useUser } from "../../hooks/context/index";

function ProfileHeader({ user }) {
  // USER
  const { users, followUserById, unfollowUserById } = useUser();

  // ****************************************************************************************************

  // AUTH
  const { userDetails } = useAuth();

  // ****************************************************************************************************

  // EVENT HANDLERS
  const followUnfollowOnClickHandler = () => {
    doesLoggedInUserFollowUser()
      ? unfollowUserById(user._id)
      : followUserById(user._id);
  };

  // ****************************************************************************************************

  // HELPER FUNCTIONS
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

  // ****************************************************************************************************

  return (
    <>
      <div className="profile-header-container">
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
      <hr className="hr-thin" />
    </>
  );
}

export { ProfileHeader };
