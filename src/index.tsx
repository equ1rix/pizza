import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { HashRouter, Route, Routes } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { store, persistor } from "./redux/store";

import Homepage from "./pages/homepage";
import Cartpage from "./pages/cartpage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cartpage" element={<Cartpage />} />
          </Routes>
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
