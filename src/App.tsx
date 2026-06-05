import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Benefits from './pages/Benefits';
import Showcase from './pages/Showcase';
import navigationData from './data/navigation.json';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation data={navigationData} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </div>
  );
}

export default App;
