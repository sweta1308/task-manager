import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TaskProvider } from "./context/taskContext";
import { StatusProvider } from "./context/statusContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  <TaskProvider>
    <StatusProvider>
      <App />
    </StatusProvider>
  </TaskProvider>

  // </React.StrictMode>
);
