import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { Toaster } from 'react-hot-toast';
import { store, persistor } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor}> 
        <BrowserRouter> 
          <App />
          <Toaster/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
