import styled from 'styled-components';
export default function Button({children}){

    return (
        <MyButton>
        {children}
        </MyButton>
    )
}

//styled-Componentes

const MyButton = styled.button`
width:300px;
    height:45px;
background-color:#52B6FF;
border-radius: 4.63636px;
color:#FFFFFF;
font-weight: 400;
font-size: 21px;
line-height: 26px;
display:flex;
justify-content:center;
align-items:center;
border:none;
`