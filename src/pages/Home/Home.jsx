import styles from "./Home.module.css";
import "./Home.css";
import { Link } from "react-router-dom";
import { PostMessage, Posts, RightSideBar } from "../../components/index";
import { useAuth, useUser, usePost } from "../../hooks/context/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { filterPostsByType, filterUsersByType } from "../../helpers/index";

const textingStoryset = require("../../assets/images/texting_storyset.svg");

function Home() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Home");

  // ****************************************************************************************************

  // AUTH
  const { userDetails, encodedToken } = useAuth();

  // ****************************************************************************************************

  // POST
  const { posts, createPost } = usePost();

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
      {areConditionsSatisfiedForPageLoad() ? (
        <div className={styles["container-authenticated"]}>
          <main className="main">
            <PostMessage user={loggedInUser()} savePost={createPost} />
            <Posts
              filteredPosts={filterPostsByType(
                posts,
                loggedInUser(),
                "posts from users that loggedInUser is following"
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
      ) : (
        <div className={styles["main-container-unauthenticated"]}>
          <main className="home">
            <section className="hero-image">
              <img
                className="image-responsive"
                src={textingStoryset.default}
                alt="Two people using their phones"
              />
            </section>
            <section className="hero-text">
              <h1 className="sub-title">
                Social Media for Anyone and Everyone.
              </h1>
              <p className="description">
                MikeySocial is a social networking website on which users can
                post and interact with messages known as "moments". It helps you
                connect with friends, family and other people you know.
              </p>
              <Link to="/auth">
                <button className="btn btn-primary">Get connected</button>
              </Link>
            </section>
          </main>
        </div>
      )}
    </>
  );
}

export { Home };