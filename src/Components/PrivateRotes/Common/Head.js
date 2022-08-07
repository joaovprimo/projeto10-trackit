import styled from 'styled-components';
import {useContext } from "react";
import UserContext from "../../../Context/Context";

export default function Head({img}){
    const { nametop } = useContext(UserContext);
    return(
        <Header>
            <ImgLogo> <img src={nametop} alt="namelogo" /></ImgLogo>
            <PhotoPerfil><img src={img} alt="foto"/></PhotoPerfil>
        </Header>
    );
}

const Header = styled.div`
width:100vw;
height:70px;
position:relative;
top:0;
right:0;
display:flex;
background-color:#126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
align-items:center;
justify-content:space-between;
`
const ImgLogo = styled.span`

margin-left:25px;
img{
    width:95px;
    height:30px;
}
`
const PhotoPerfil = styled.span`
margin-right:25px;
img{
    border-radius: 98.5px;
    width: 51px;
height: 51px;
}
`
