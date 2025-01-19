// import { ThemeProvider } from "@mui/material/styles";
// import { CssBaseline } from "@mui/material";
// import { Provider } from "react-redux";
// import { BrowserRouter as Router } from "react-router-dom";
// import theme from "./app/MaterialTheme";
// import React from "react";
// import ReactDOM, { createRoot } from "react-dom/client";
// import { store } from "./app/store";
// import App from "./app/App";

// const root = createRoot(document.getElementById("root") as HTMLElement);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Router>
//           <App />
//         </Router>
//       </ThemeProvider>
//     </Provider>
//   </React.StrictMode>
// );


import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "../src/app/App";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./app/MaterialTheme";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
