import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import "./fonts/font.css";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import BgProvider from "./contexts/BackgroundColor";
import { ThemeProvider } from "styled-components";
import theme from "./style/DeviceTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <GlobalStyles />
        <BgProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BgProvider>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
