import styles from "./Profile.module.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ProfileDetails, Posts } from "../../components/index";
import {
  useAuth,
  useUser,
  useBookmarkPost,
  usePost,
} from "../../hooks/context/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { filterPostsByType } from "../../helpers/index";

function Profile() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Profile");

  // ****************************************************************************************************

  // AUTH
  const { userDetails, encodedToken } = useAuth();

  // ****************************************************************************************************

  // POST
  const { posts } = usePost();

  // ****************************************************************************************************

  // BOOKMARKED POST
  const { bookmarkedPosts } = useBookmarkPost();

  // ****************************************************************************************************

  // USER
  const { users } = useUser();

  // ****************************************************************************************************

  // STATES
  const [tab, setTab] = useState("Posts");

  // ****************************************************************************************************

  // ROUTER-DOM
  const location = useLocation();

  // ****************************************************************************************************

  // HELPER FUNCTIONS
  const loggedInUser = () => {
    return users.find((user) => user.username === userDetails.username);
  };

  const getUser = () => {
    return users.find((user) => user.username === location.pathname.slice(9));
  };

  // ****************************************************************************************************

  return (
    <div className={styles["main-container"]}>
      {userDetails != null &&
        encodedToken != null &&
        users != null &&
        posts != null && (
          <>
            <main className="main profile-page">
              <ProfileDetails user={getUser()} />

              {getUser().username === userDetails.username ? (
                <>
                  <div className="grid grid-col-2 posts-header">
                    <button
                      className={
                        tab === "Posts"
                          ? "btn btn-primary grid-item btn-squared"
                          : "btn btn-dark-outline grid-item btn-squared"
                      }
                      onClick={() => setTab("Posts")}
                    >
                      <i className="fa-solid fa-table-cells"></i> Posts
                    </button>
                    <button
                      className={
                        tab === "Bookmarks"
                          ? "btn btn-primary grid-item btn-squared"
                          : "btn btn-dark-outline grid-item btn-squared"
                      }
                      onClick={() => setTab("Bookmarks")}
                    >
                      <i className="fa-solid fa-bookmark"></i> Bookmarks
                    </button>
                  </div>

                  {tab === "Posts" && (
                    <Posts
                      filteredPosts={filterPostsByType(
                        posts,
                        loggedInUser(),
                        "posts from user",
                        getUser().username
                      )}
                      users={users}
                    />
                  )}

                  {tab === "Bookmarks" && (
                    <Posts filteredPosts={bookmarkedPosts} users={users} />
                  )}
                </>
              ) : (
                <>
                  <Posts
                    filteredPosts={filterPostsByType(
                      posts,
                      loggedInUser(),
                      "posts from user",
                      getUser().username
                    )}
                    users={users}
                  />
                </>
              )}
            </main>
          </>
        )}
    </div>
  );
}

export { Profile };
