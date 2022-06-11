import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Bcrypt from './components/Bcrypt';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/bcrypt" element={<Bcrypt />} />
      </Routes>
    </div>
  );
}

export default App;
