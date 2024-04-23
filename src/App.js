
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Component/Pages/Home';
import Practice from './Component/Pages/Practice';
import About from './Component/Pages/About';
import Navbar from './Component/Navbar/Navbar';
import Signup from './Component/RegisterLogin/Signup';
import Login from './Component/RegisterLogin/Login';
import PrivateRoutes from './Component/Utility/PrivateRoutes';
import { AuthProvider } from './Component/Utility/AuthContexProvider';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route element={<PrivateRoutes/>}>
      <Route path='/practice' element={<Practice/>}></Route>
      <Route path='/about-us' element={<About/>}></Route>
      </Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      {/* <Route path='/profile' element={<Login/>}/> */}
    </Routes>
    </BrowserRouter>
    {/* <Foote  r/> */}
    </>
  );
}

export default App;
