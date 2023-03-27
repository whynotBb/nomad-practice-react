import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          basename={process.env.PUBLIC_URL}
          path="/movie/:id"
          element={<Detail />}
        />
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
