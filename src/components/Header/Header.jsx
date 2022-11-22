import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme, useAuth, useOthers } from "../../hooks/context/index";

function Header() {
  // THEME
  const { theme, setTheme } = useTheme();

  /* **************************************************************************************************** */

  // AUTH
  const { userDetails, encodedToken, logoutUserDetails } = useAuth();

  /* **************************************************************************************************** */

  // OTHERS
  const { searchBarText, setSearchBarText } = useOthers();

  /* **************************************************************************************************** */

  // To handle logout button onClick
  const handlerLogout = () => {
    logoutUserDetails();
  };

  // To handle theme button onClick
  const handlerTheme = () => {
    document.body.classList.toggle(theme);
    setTheme(theme === "light-theme" ? "dark-theme" : "light-theme");
  };

  // To handle search bar text onInput
  const handleSearchBarTextOnChange = (e) => {
    navigate(`/search-results/search?username="${e.target.value}"`);
    setSearchBarText(e.target.value);
  };

  /* **************************************************************************************************** */

  const navigate = useNavigate();
  const location = useLocation();

  if (!location.pathname.startsWith("/search-results")) {
    setSearchBarText("");
  }

  /* **************************************************************************************************** */

  return (
    <header className="header">
      <Link to="/" className="brand-name">
        MikeySocial
      </Link>

      <nav>
        <ul className="list list-horizontal">
          {encodedToken && (
            <li className="relative inline-block">
              <input
                type="text"
                name="usernameSearch"
                id="usernameSearch"
                placeholder="Search username"
                size="30"
                value={searchBarText}
                onChange={handleSearchBarTextOnChange}
              />
              <span className="absolute badge-inside-center-right">
                <i className="fa-solid fa-magnifying-glass fa-lg" />
              </span>
            </li>
          )}

          <li>
            <Link to="/" className="styled-link">
              <i className="fa-solid fa-home fa-lg" /> Home
            </Link>
          </li>

          {encodedToken && (
            <li>
              <Link to="/explore" className="styled-link">
                <i className="fa-solid fa-compass fa-lg" /> Explore
              </Link>
            </li>
          )}

          {encodedToken && (
            <li>
              <Link
                to={`/profile/${userDetails.username}`}
                className="styled-link"
              >
                <i className="fa-solid fa-user fa-lg"></i> Profile
              </Link>
            </li>
          )}

          <li>
            {encodedToken ? (
              <Link to="/" className="styled-link" onClick={handlerLogout}>
                <i className="fa-solid fa-right-from-bracket fa-lg"></i> Logout
              </Link>
            ) : (
              <Link to="/auth" className="styled-link">
                <i className="fa-solid fa-right-to-bracket  fa-lg" /> Login
              </Link>
            )}
          </li>

          <li>|</li>

          <li>
            <a
              className="styled-link"
              href="https://github.com/tonymike99/mikey-social"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-lg" />
            </a>
          </li>

          <li>
            <Link to="#" className="styled-link" onClick={handlerTheme}>
              <i
                id="theme-icon"
                className={
                  theme === "dark-theme"
                    ? "fa-solid fa-sun fa-lg"
                    : "fa-solid fa-moon fa-lg"
                }
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
