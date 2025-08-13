import { useState } from 'react'; 
import { Routes, Route } from 'react-router-dom'; 
import Login from './components/Login'; 
import Signup from './components/SignUp'; 
import './App.css';  
import Dashboard from './components/Dashboard'; 

const App = () => {
  const [isSignup] = useState(false); 

  return (  
    <div className="app-container">
      <Routes>
        <Route path="/" element={isSignup ? <Signup /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
