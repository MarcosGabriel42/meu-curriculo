import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { LanguageProvider } from "./context/LanguageContext";
import "./i18n/i18n.js";

AOS.init({
  duration: 900,
  once: true,
  offset: 80,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
