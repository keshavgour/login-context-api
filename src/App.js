import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { AuthProvider } from './Context/AuthContext';
import Home from './Components/Home';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
     <Route path='/signup' element={<Signup />}></Route>
      <Route path='/home' element={<Home />}></Route> 
    </Routes>
  </BrowserRouter>
  </AuthProvider>


  );
}

export default App;
