import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "./statemanagement/store.js";
createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-ovqq47qbket3x2wy.us.auth0.com"
    clientId="7NYS2YS3XNGAj0rWcDK96ieoHCNrMWmO"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
