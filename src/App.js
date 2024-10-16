import './App.css';
import Header from './Components/header';
import QrCode from './Components/qr_code'; 
import TutionFess from './Components/tution_fees';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> {/* Header stays common across all pages */}
        
        <Routes>
          {/* Define different routes here */}
          
          <Route path="/qr_code" element={<QrCode />} /> {/* Route for QR Code page */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
