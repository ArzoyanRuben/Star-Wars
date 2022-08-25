import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage, VehiclePage } from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Dashboard" element={<MainPage />} />
        <Route path="/vehicles/:id" element={<VehiclePage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
