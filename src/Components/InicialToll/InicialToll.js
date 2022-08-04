import { useContext} from "react";
import UserContext from "../../Context/Context";
import styled from 'styled-components';
import Form from "./Form"
import Container from "../../Context/Container";
//import { useNavigate } from "react-router-dom";


export default function InicialTool(){
const {logoimg} = useContext(UserContext);

return(
<Container>

<Logo src={logoimg} alt="logo"/>
<Form/>

</Container>
)

}



//styled-Componentes

const Logo = styled.img`

width: 180px;
height: 180px;
margin-top:70px;
margin-bottom:35px;
`
