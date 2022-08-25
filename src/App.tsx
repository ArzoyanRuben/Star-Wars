import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Dashboard, VehiclePage } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/vehicles/:id" element={<VehiclePage />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
