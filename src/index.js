import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bulma/css/bulma.min.css";
import store from "./store";
import firebase from "firebase";
import { setAuthUser } from "./store/actions";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

firebase.auth().onAuthStateChanged(authUser => {
  if (authUser) setAuthUser(authUser);
  ReactDOM.render(app, document.getElementById("root"));
});

registerServiceWorker();
