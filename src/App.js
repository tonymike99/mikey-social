import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute, RestrictedRoute } from "./auth/index";
import { Header, Footer } from "./components/index";

function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
