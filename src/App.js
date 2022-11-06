import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Register from "./components/register";
import Edit from "./components/edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login title="Home Page" desc="Test Page" />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard title="Dashboard Page" />}
        />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route
          path="/login"
          element={<Login title="Home Page" desc="Test Page" />}
        />
        <Route
          path="/register"
          element={<Register title="Register Page" desc="Test Page" />}
        />
        <Route
          path="/edit"
          element={<Edit title="Edit Page" desc="Test Page" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
