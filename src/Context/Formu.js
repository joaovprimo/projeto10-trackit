import styled from "styled-components";

const Formu = styled.form`
display:flex;
flex-direction:column;

input{
    width:300px;
    height:45px;
    background-color: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-bottom:7px;
}
input::placeholder{
    color: rgba(219, 219, 219, 1);
    padding: 10px;
    font-size:21px;
}

`

export default Formu;