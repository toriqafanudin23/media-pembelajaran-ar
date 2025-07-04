import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cover from './pages/Cover';
import NotFound from './pages/NotFound';
import Petunjuk from './pages/Petunjuk';
import Home from './pages/Home';
import Volume from './pages/Volume';
import Volume2 from './pages/Volume2';
import Volume3 from './pages/Volume3';
import VolumePrisma from './pages/VolumePrisma';
import VolumeLimas from './pages/VolumeLimas';
import LuasPermukaan from './pages/LuasPermukaan';
import LuasPermukaanBalok from './pages/LuasPermukaanBalok';
import LatihanSoalLP from './pages/SoalLuasPermukaan';
import LuasPermukaanPrisma from './pages/LuasPermukaanPrisma';
import LuasPermukaanLimas from './pages/LuasPermukaanLimas';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/petunjuk" element={<Petunjuk />} />
        <Route path="/home" element={<Home />} />
        <Route path="/volume" element={<Volume />} />
        <Route path="/volume-2" element={<Volume2 />} />
        <Route path="/volume-3" element={<Volume3 />} />
        <Route path="/volume-prisma" element={<VolumePrisma />} />
        <Route path="/volume-limas" element={<VolumeLimas />} />
        <Route path="/luas-permukaan" element={<LuasPermukaan />} />
        <Route path="/luas-permukaan-balok" element={<LuasPermukaanBalok />} />
        <Route
          path="/latihan-soal-luas-permukaan"
          element={<LatihanSoalLP />}
        />
        <Route
          path="/luas-permukaan-prisma"
          element={<LuasPermukaanPrisma />}
        />
        <Route path="/luas-permukaan-limas" element={<LuasPermukaanLimas />} />
        <Route path="/quiz" element={<Quiz />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
