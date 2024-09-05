import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/NavBar.jsx";
import Header from './component/Header.jsx';
import Footer from "./component/Footer.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./views/Home.jsx";
import Register from "./views/Register.jsx";
import Login from "./views/Login.jsx";
import Cart from "./views/Cart.jsx";
import P001 from "./views/Pizza/P001.jsx";
import NotFound from "./views/NotFound.jsx";
import Profile from "./views/Profile.jsx";
import CardContext from "./context/CardContext.jsx";
import { useState } from "react";


function App() {
  const [total, setTotal] = useState(0);
  
  return (
    <>
      <CardContext.Provider
        value={{ total, setTotal, listaPizzas, setListaPizzas }}
      >
        <Navbar></Navbar>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="/pizza/p001" element={<P001></P001>} />
          <Route path="/profile" element={<Profile></Profile>} />
          <Route path="/404" element={<NotFound></NotFound>} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </CardContext.Provider>

      <Footer></Footer>
    </>
  );
}

export default App;