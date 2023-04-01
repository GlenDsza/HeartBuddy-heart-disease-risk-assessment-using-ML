import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, PublicRoute, Footer } from "./components";
import { LandingPage, LoginPage, SignupPage } from "./pages";
import styles from "./style";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className="bg-darkBlue w-full overfow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <Navbar />
      </div>
      <hr />
      <Router>
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
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
