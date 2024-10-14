import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Tution from './Components/tution';
import Exam from './Components/exam';
import Other from './Components/other';
import Admission from './Components/admission';
import QR from './Components/QRcode';
function App() {
  return (
    <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Tution />} />
                <Route path="/tution" element={<Tution />} />
                <Route path="/exam" element={<Exam />} />
                <Route path="/other" element={<Other />} />
                <Route path="/admission" element={<Admission />} />
                <Route path="/QR" element={<QR />} />
            </Routes>
        </Router>
  );
}

export default App;
