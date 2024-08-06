import ReactDOM from "react-dom/client";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import App from "./components/App/App";
import "./index.css";
import Reducer from "./Reducer/Reducer";

const store = configureStore(
  {
    reducer: Reducer,
  },
  applyMiddleware(thunk)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
