import "./LeftSideBar.css";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function LeftSideBar() {
  const linkDetails = [
    { to: "/", name: "Home", icon: "fa-home" },
    { to: "/explore", name: "Explore", icon: "fa-compass" },
    { to: "/profile", name: "Profile", icon: "fa-user" },
  ];

  // ****************************************************************************************************

  return (
    <aside className="left-sidebar">
      <ul className="list list-vertical">
        {linkDetails.map((linkDetail) => (
          <Fragment key={linkDetail.to}>
            <li>
              <NavLink className="styled-link" to={`${linkDetail.to}`}>
                <i className={`fa-solid ${linkDetail.icon} fa-lg`}></i>
                {`${linkDetail.name}`}
              </NavLink>
            </li>
            <hr className="hr-thin" />
          </Fragment>
        ))}
      </ul>
    </aside>
  );
}

export { LeftSideBar };
