import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "./App"
import GameboardView from "./GameboardView"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gameboard" element={<GameboardView />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
