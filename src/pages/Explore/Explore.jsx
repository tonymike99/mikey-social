import styles from "./Explore.module.css";
import { Posts, RightSideBar } from "../../components/index";
import { useAuth, useUser, usePost } from "../../hooks/context/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { filterPostsByType, filterUsersByType } from "../../helpers/index";

function Explore() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Explore");

  // ****************************************************************************************************

  // AUTH
  const { userDetails, encodedToken } = useAuth();

  // ****************************************************************************************************

  // POST
  const { posts } = usePost();

  // ****************************************************************************************************

  // USER
  const { users } = useUser();

  // ****************************************************************************************************

  // HELPER FUNCTIONS
  const loggedInUser = () => {
    return users.find((user) => user.username === userDetails.username);
  };

  const areConditionsSatisfiedForPageLoad = () => {
    return (
      userDetails != null &&
      encodedToken != null &&
      users != null &&
      posts != null
    );
  };

  // ****************************************************************************************************

  return (
    <>
      {areConditionsSatisfiedForPageLoad() && (
        <div className={styles["main-container"]}>
          <main className="main">
            <Posts
              filteredPosts={filterPostsByType(
                posts,
                loggedInUser(),
                "posts from users that loggedInUser is not following"
              )}
              users={users}
            />
          </main>

          <RightSideBar
            users={filterUsersByType(
              users,
              "users that loggedInUser is not following",
              userDetails.username
            )}
          />
        </div>
      )}
    </>
  );
}

export { Explore };
