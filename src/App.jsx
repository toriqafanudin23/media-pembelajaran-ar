import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cover from './pages/Cover';
import NotFound from './pages/NotFound';
import Petunjuk from './pages/Petunjuk';
import Home from './pages/Home';
import Volume from './pages/Volume';
import Volume2 from './pages/Volume2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/petunjuk" element={<Petunjuk />} />
        <Route path="/home" element={<Home />} />
        <Route path="/volume" element={<Volume />} />
        <Route path="/volume-2" element={<Volume2 />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
