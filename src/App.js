import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing.js';
import Pattern1 from './Pages/Pattern1.js';
import Pattern2 from './Pages/Pattern2.js';
import Pattern3 from './Pages/Pattern3.js';
import Patterns from './Components/Patterns.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/" element={<Patterns />} />
        <Route path="/Pattern1" element={<Pattern1 />} />
        <Route path="/Pattern2" element={<Pattern2 />} />
        <Route path="/Pattern3" element={<Pattern3 />} />
      </Routes>
    </div>
  );
}

export default App;