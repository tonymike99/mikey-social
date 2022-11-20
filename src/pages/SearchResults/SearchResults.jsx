import styles from "./SearchResults.module.css";
import "./SearchResults.css";
import { ProfileHeader } from "../../components/index";
import {
  useAuth,
  useUser,
  usePost,
  useOthers,
} from "../../hooks/context/index";
import { useDocumentTitle } from "../../hooks/custom/index";

function SearchResults() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Search Results");
  // ****************************************************************************************************

  // AUTH
  const { userDetails, encodedToken } = useAuth();

  // ****************************************************************************************************

  // USER
  const { users } = useUser();

  // ****************************************************************************************************

  // POST
  const { posts } = usePost();

  // ****************************************************************************************************

  // OTHERS
  const { searchBarText } = useOthers();

  // ****************************************************************************************************

  // HELPER FUNCTIONS
  const filterUsersFromSearch = () => {
    return users.filter((user) => user.username.includes(searchBarText));
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
            <section className="search-results-container">
              <h2 className="text-center margin-bottom-2">Search Results</h2>
              <div>
                {searchBarText === "" ? (
                  <h4 className="text-center">
                    Please type a username to search
                  </h4>
                ) : filterUsersFromSearch().length === 0 ? (
                  <h4 className="text-center">
                    Username not found from search
                  </h4>
                ) : (
                  filterUsersFromSearch().map((user) => (
                    <ProfileHeader key={user._id} user={user} />
                  ))
                )}
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
}

export { SearchResults };
