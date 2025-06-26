import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cover from './pages/Cover';
import NotFound from './pages/NotFound';
import Petunjuk from './pages/Petunjuk';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/petunjuk" element={<Petunjuk />} />
        <Route path="/home" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
