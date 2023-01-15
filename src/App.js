
import './App.css';
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Notfound from './Component/NotFound/Notfound';
import User from './Component/User/User';
import Login from './Component/User/Login';
import Register from './Component/User/Register';
import RequireAuth from './Component/RequireAuth';
import Checkout from './Component/checkOut/Checkout';
import Blogs from './Component/Blogs/Blogs';
import About from './Component/About/About';
function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='*' element={<Notfound />} />
        <Route path='/' element={<Navigate to={'/home'} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path='/user' element={<Navigate to="/user/login" />} />
        <Route path='/user' element={<User />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
