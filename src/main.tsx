import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./provider/ThemeProvider";
import { store } from "./redux/store";
import { routes } from "./routes/AppRoutes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={routes} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
