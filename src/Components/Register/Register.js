import { useContext} from "react";
import UserContext from "../../Context/Context";
import styled from 'styled-components';
import FormRegister from "./FormRegister";
import Container from "../../Context/Container";

export default function Register(){
    const {logoimg} = useContext(UserContext);

return(
<Container>

<Logo src={logoimg} alt="logo"/>
<FormRegister/>

</Container>
)
}

const Logo = styled.img`

width: 180px;
height: 180px;
margin-top:70px;
margin-bottom:35px;
`