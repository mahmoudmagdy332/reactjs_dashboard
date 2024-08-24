import {  RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import routes from "./routes";
import { Provider } from "react-redux";
import { store } from "./app/store";
import {  QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./app/hooks/queryClient";
function App() {
  const [theme, colorMode,mode] = useMode();

  return (
    <ColorModeContext.Provider value={{ colorMode,mode }}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={routes} />
          </QueryClientProvider>
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
