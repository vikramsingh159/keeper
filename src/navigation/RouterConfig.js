import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

function Routing() {
  return (
    <Router>
      <Routes>
        {/* Home page preview and Input area */}
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default Routing;
