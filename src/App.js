import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute, RestrictedRoute } from "./auth/index";
import { Header, Footer } from "./components/index";
import {
  Auth,
  Home,
  Explore,
  Profile,
  SearchResults,
  PageNotFound,
} from "./pages/index";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />

        <Route element={<RestrictedRoute />}>
          <Route path="/auth" element={<Auth />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/search-results/:username" element={<SearchResults />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
