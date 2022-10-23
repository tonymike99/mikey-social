import "./Header.css";
import { Link } from "react-router-dom";
import { useTheme, useAuth } from "../../hooks/context/index";

function Header() {
  const { theme, setTheme } = useTheme();
  const { encodedToken, logoutUserDetails } = useAuth();

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

  /* **************************************************************************************************** */

  return (
    <header className="header">
      <Link to="/" className="brand-name">
        MikeySocial
      </Link>

      <nav>
        <ul className="list list-horizontal">
          <li>
            <Link to="/" className="styled-link">
              <i className="fa-solid fa-home fa-lg" /> Home
            </Link>
          </li>

          <li>
            <Link to="/explore" className="styled-link">
              <i className="fa-solid fa-magnifying-glass fa-lg" /> Explore
            </Link>
          </li>

          {encodedToken && (
            <li>
              <Link to="/profile" className="styled-link">
                <i className="fa-solid fa-user fa-lg"></i> Profile
              </Link>
            </li>
          )}

          {encodedToken && (
            <li>
              <Link to="/settings" className="styled-link">
                <i className="fa-solid fa-gear fa-lg"></i> Settings
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
