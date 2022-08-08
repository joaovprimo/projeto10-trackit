import { getHistoric } from "../Axios";
import { useEffect, useState } from "react";
import styled from 'styled-components';
import { useContext} from "react";
import UserContext from "../../Context/Context";

export default function Historic(){
    const [historic, setHistoric] = useState([]);
    useEffect(() => {
        getHistoric().then((hbt) => {
            setHistoric(hbt.data);
        })
    }, [])
    return(
        <>
        <Content>
        <Top>
            <span>Histórico</span>
        </Top>
        <h1>Em breve você poderá ver o histórico dos seus hábitos aqui!</h1>
        </Content>
        </>
    );
}



const Content = styled.div`
margin: 0px 20px;
h1{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666; 
}
`
const Top = styled.div`
height:35px;
margin-top:30px;
margin-bottom:30px;
span{
    font-weight: 400;
font-size: 23px;
line-height: 29px;
    color:#126BA5;
    font-family: 'Lexend Deca';  
}
`