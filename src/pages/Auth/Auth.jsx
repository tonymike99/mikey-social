import { useState } from "react";
import { Login, Signup } from "../../components/index";

function Auth() {
  const [component, setComponent] = useState("Login");

  // ****************************************************************************************************

  return (
    <div className="main-container">
      <main className="main">
        {component === "Login" ? (
          <Login setComponent={setComponent} />
        ) : (
          <Signup setComponent={setComponent} />
        )}
      </main>
    </div>
  );
}

export { Auth };
