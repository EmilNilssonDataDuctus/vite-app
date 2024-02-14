import 'mapbox-gl/dist/mapbox-gl.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
export const ConfigContext = React.createContext();

const configValue = { showSpeakerSpeakingDays: true };

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigContext.Provider value={configValue}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ConfigContext.Provider>
);
