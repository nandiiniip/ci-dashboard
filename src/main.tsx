import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CustomThemeProvider } from "./themes/CustomThemeProvider.tsx";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import store from "./redux/store/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <CustomThemeProvider>
        <CssBaseline />
        <App />
      </CustomThemeProvider>
    </Provider>
  </StrictMode>
);
