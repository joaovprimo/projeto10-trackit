import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import { Link} from "react-router-dom";

export default function Footer (){
return(
    <>
    <Link to="/hoje"><Circulo>
    <CircularProgressbar/>
    </Circulo></Link>
    <Bottom>
    <Link to="/habitos"><span> Hábitos </span></Link>
    <Link to="/historico"><span> Histórico </span></Link>
    </Bottom>
</>
)
} 

const Bottom = styled.div`
width:100vw;
height:70px;
position:fixed;
bottom:0;
right:0;
background-color:#Fafafa;
display:flex;
justify-content:space-between;
span{
    margin:25px 60px;
    color: #52B6FF;
    line-height: 22px;
    font-size:18px;
    font-weight: 400;
    font-weight:bold;
}
`
const Circulo = styled.div`
width:91px;
height:91px;
position:fixed;
bottom:15px;
left:calc(50% - 45.5px);
z-index:1;
`