import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        {/* 다이나믹 url -> ':' 를 붙여 주기 */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
