import {BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../SignUp/SignUp_Page";
import Login from "../Login/LoginPage";
import Navbar from "../MenuBar/Navbar";
import Cartpage from "../CartPage/CartPage";
import Logoutpage from "../LogOutPage/Logout"

export default function Router(){
    return(
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="signup" element = {<SignUp />} />
            <Route path="/" element = {<Login />} />
            <Route path="cart" element = {<Cartpage />} />
            <Route path="logout" element = {< Logoutpage/>} />
        </Routes>
        </BrowserRouter>
    )
}

