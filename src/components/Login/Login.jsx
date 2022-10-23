import { useState } from "react";
import { useDocumentTitle } from "../../hooks/custom/index";
import { useAuth } from "../../hooks/context/index";

function Login({ setComponent }) {
  // SET DOCUMENT TITLE
  useDocumentTitle("Login");

  // ****************************************************************************************************

  const { authenticateLoginDetails } = useAuth();
  const [passwordType, setPasswordType] = useState("password");
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleUsernameOnChange = (e) => {
    setLoginDetails({ ...loginDetails, username: e.target.value });
  };

  const handlePasswordOnChange = (e) => {
    setLoginDetails({ ...loginDetails, password: e.target.value });
  };

  const handlePasswordType = () => {
    setPasswordType(passwordType === "text" ? "password" : "text");
  };

  const handleGuestLoginOnClick = () => {
    let details = {
      username: "guest_user",
      password: "IcedLatte@2022",
    };
    setLoginDetails(details);
    authenticateLoginDetails(details);
  };

  const handleLoginOnClick = (e) => {
    e.preventDefault();
    authenticateLoginDetails(loginDetails);
  };

  // ****************************************************************************************************

  return (
    <section className="auth">
      <h3 className="h3">LOGIN</h3>

      <form className="form" action="#">
        <div className="form-control">
          <input
            type="text"
            id="usernameInput"
            placeholder="Username"
            required
            value={loginDetails.username}
            pattern="^[a-zA-Z0-9]*.{8,20}$"
            title="Username must contain a minimum of 8 characters and maximum of 20 characters"
            onChange={(e) => handleUsernameOnChange(e)}
          />
        </div>

        <div className="form-control relative">
          <input
            type={passwordType}
            id="passwordInput"
            placeholder="Password"
            required
            value={loginDetails.password}
            pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$"
            title="Password must contain atleast one lowercase letter, one uppercase letter, one digit and one special character, and a minimum of 8 characters and maximum of 20 characters"
            onChange={(e) => handlePasswordOnChange(e)}
          />
          <span
            className="absolute badge-inside-center-right color-black"
            onClick={handlePasswordType}
          >
            {passwordType === "password" ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash"></i>
            )}
          </span>
        </div>

        <div className="form-control">
          <button
            className="btn btn-primary btn-width-100 pointer"
            type="submit"
            onClick={(e) => handleLoginOnClick(e)}
          >
            Login
          </button>
        </div>

        <small
          className="styled-link pointer"
          onClick={handleGuestLoginOnClick}
        >
          Guest Login
        </small>

        <small
          className="styled-link pointer"
          onClick={() => setComponent("Signup")}
        >
          Don't have an account? Sign up
        </small>
      </form>
    </section>
  );
}

export { Login };
