import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TaskProvider } from "./context/taskContext";
import { StatusProvider } from "./context/statusContext";
import { ThemeProvider } from "./context/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider>
      <TaskProvider>
        <StatusProvider>
          <App />
        </StatusProvider>
      </TaskProvider>
    </ThemeProvider>
  </BrowserRouter>

  // </React.StrictMode>
);
