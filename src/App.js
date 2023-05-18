import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./utils/protected-route";
import { AuthLayout } from "./utils/auth-layout";
import CvBuilder from "./pages/CvBuilder";
import Candidate from "./pages/Candidate";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import NavBar from "./utils/nav";
import CvDetail from "./pages/CvDetail";
import "draft-js/dist/Draft.css";

function App() {
  const nameFromLS = localStorage.getItem("lsname");
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route exact path="/" element={<HomePage />} />
          <Route element={<AuthLayout />}>
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/register" element={<Register />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/candidate" element={<Candidate />} />
            <Route exact path="/build" element={<CvBuilder />} />
            <Route exact path="/cv/:id" element={<CvDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
