import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, PublicRoute, Footer, ProtectedRoute } from "./components";
import { HomePage, LandingPage, LoginPage, SignupPage } from "./pages";

import styles from "./style";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className="bg-darkBlue w-full overfow-hidden">
      <Router>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <Navbar />
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
                <LoginPage />
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
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
