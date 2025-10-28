import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PageLayout from "./components/PageLayout";
import Home from "./pages/Home";
import CarList from "./pages/CarList";
import CarDetail from "./pages/CarDitail";

export default function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <PageLayout>
                <Home />
              </PageLayout>
            }
          />
          <Route
            path="/cars"
            element={
              <PageLayout>
                <CarList />
              </PageLayout>
            }
          />
          <Route
            path="/cars/car-detail"
            element={
              <PageLayout>
                <CarDetail />
              </PageLayout>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
