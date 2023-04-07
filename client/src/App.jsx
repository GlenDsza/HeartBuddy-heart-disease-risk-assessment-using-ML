import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, PublicRoute, Footer, ProtectedRoute } from "./components";
import { HomePage, LandingPage, LoginPage, MapPage, SignupPage } from "./pages";

import styles from "./style";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(false);
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
            path="/map"
            element={
              <ProtectedRoute>
                <MapPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
