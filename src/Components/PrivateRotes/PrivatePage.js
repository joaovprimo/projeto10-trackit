import { useNavigate} from "react-router-dom";
import { useState, useContext } from "react";
import styled from 'styled-components';
import UserContext from "../../Context/Context";
import Head from "./Common/Head";
import Footer from "./Common/Footer";

export default function PrivatePage({children}){
    const navigate=useNavigate();
    const { form} = useContext(UserContext);
   const auth = localStorage.getItem("token");
         
        
        if(auth){
            return(   <>
                <Head img={form.image}/>
               <Content> {children} </Content>
              <Footer/>
                </>)
        }else{
           navigate("/");
        }
    }

const Content = styled.div`
background-color:#E5E5E5;
height: 100vh;
overflow:hidden;
`




