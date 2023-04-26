import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Navbar, PublicRoute, Footer, ProtectedRoute } from "./components";
import {
  HomePage,
  FormPage,
  LandingPage,
  LoginPage,
  NearByPage,
  SignupPage,
} from "./pages";
import styles from "./style";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import Profile from "./pages/HomePage";
import Research from "./pages/Research";

const App = () => {
  const [user, setUser] = useState(false);
  // console.log(import.meta.env.VITE_MAPS_API);
  useEffect(() => {
    sessionStorage.mobile ? setUser(true) : setUser(false);
  });
  return (
    <div className="bg-darkBlue w-full overfow-hidden">
      <Router>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <Navbar user={user} setUser={setUser} />
        </div>
        <hr />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <PublicRoute>
                <LandingPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage setUser={setUser} />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignupPage />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assess"
            element={
              <ProtectedRoute>
                <FormPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/map"
            element={
              <ProtectedRoute>
                <NearByPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/research"
            element={
              <ProtectedRoute>
                <Research />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
