import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import CarList from './pages/CarList';
import CarDetail from './pages/CarDetail';

export default function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/cars/:id" element={<CarDetail />} />
        </Routes>
      </div>
    </Router>
  );
}