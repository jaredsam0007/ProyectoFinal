import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Cursorify } from 'cursorify';
// Importa aquí otros componentes necesarios como Cartas, Clanes, etc.
import WelcomeMessage from "./components/Welcomemessage"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/*<Route path="/card" element={<Cartas />} />
        <Route path="/clanes" element={<Clanes />} />
        <Route path="/retos" element={<Challenges />} />
        <Route path="/cardguardada" element={<Guardados />} />
  */}
        <Route path="/" element={<WelcomeMessage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
