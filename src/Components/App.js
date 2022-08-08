import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../Context/Context";
import tackitimg from "../Images/Group8.png";
import nameimg from "../Images/TrackIt.png";
import del from "../Images/Vector.png"
import GlobalStyle from "./GlobalStyle";
import InicialTool from "./InicialToll/InicialToll";
import Register from "./Register/Register"
import Button from "../Context/Button"
import Today from "../Components/PrivateRotes/Today";
import Historic from "../Components/PrivateRotes/Historic";
import Habito from "../Components/PrivateRotes/Habito";
import PrivatePage from "../Components/PrivateRotes/PrivatePage"


export default function App(){
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const logoimg = tackitimg;
    const nametop = nameimg;
    const [cont, setCont] = useState(0);
    const [doneToday, setDoneToday] = useState(0);
    console.log(cont);
    console.log(doneToday);
return(
<>
    <GlobalStyle/>
    <BrowserRouter>
    <UserContext.Provider value={{logoimg, nametop, Button, form, setForm, del, cont, setCont, doneToday , setDoneToday}}>
    <Routes>
    <Route path="/" element={<InicialTool/>}/>
    <Route path="/cadastro" element={<Register/>}/>
    <Route path="/hoje" element={<PrivatePage>
                                        <Today/>
                                        </PrivatePage>} />
                                        
    <Route path="/habitos" element={<PrivatePage>
                                        <Habito/>
                                        </PrivatePage>} />
    <Route path="/historico" element={<PrivatePage>
                                        <Historic/>
                                        </PrivatePage>} />
    </Routes>
    </UserContext.Provider>
    </BrowserRouter>
    </>
)

}
