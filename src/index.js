import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  ThemeProvider,
  AuthProvider,
  UserProvider,
  BookmarkPostProvider,
  PostProvider,
} from "./hooks/context/index";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <UserProvider>
            <BookmarkPostProvider>
              <PostProvider>
                <App />
              </PostProvider>
            </BookmarkPostProvider>
          </UserProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
