import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>

  );
}

export default App;
