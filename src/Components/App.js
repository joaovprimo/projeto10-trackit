import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useState } from "react";
import UserContext from "../Context/Context";
import tackitimg from "../Images/Group8.png";
import GlobalStyle from "./GlobalStyle";
import InicialTool from "./InicialToll/InicialToll";
import Register from "./Register/Register"
import Button from "../Context/Button"


export default function App(){

    const logoimg = tackitimg;
return(
<>
    <GlobalStyle/>
    <BrowserRouter>
    <UserContext.Provider value={{logoimg, Button}}>
    <Routes>
    <Route path="/" element={<InicialTool/>}/>
    <Route path="/cadastro" element={<Register/>}/>
    </Routes>
    </UserContext.Provider>
    </BrowserRouter>
    </>
)

}
