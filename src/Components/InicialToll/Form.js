import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import UserContext from "../../Context/Context";
import axios from "axios";
import Formu from "../../Context/Formu";
import Disable from "../../Context/Disable"
import { ThreeDots } from "react-loader-spinner";

export default function Form() {

    const { Button } = useContext(UserContext);
    const [carregando, setCarregando] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    function handleform(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function makeLogin(e) {
        setCarregando(true);
        console.log(carregando);
        e.preventDefault();
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", form);
        promise.then(() => {
            navigate("/hoje")
        }
        );

        promise.catch(() => {
            setCarregando(false);
            console.log("deu ruim")
            console.log(carregando)
        });

    }

    return (
        <>
            <Formu onSubmit={makeLogin}>
                {carregando ? (<><Disable><input type="email" placeholder="email" value={form.email} name="email" onChange={handleform} required />
                    <input type="password" placeholder="senha" value={form.password} name="password" onChange={handleform} required />
                    <Button type="submit"><ThreeDots   type="ThreeDots"
                            color="rgb(250, 250, 250)"
                            height={13}
                            width={51}
                            timeout={0} /></Button>
                    <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink></Disable></>) : (<><input type="email" placeholder="email" value={form.email} name="email" onChange={handleform} required />
                        <input type="password" placeholder="senha" value={form.password} name="password" onChange={handleform} required />
                        <Button type="submit" >Entrar</Button>
                        <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink></>)}

            </Formu>
        </>
    )
}

//styled-Componentes

const StyledLink = styled(Link)`
font-size: 15px;
line-height: 17px;
text-decoration-line: underline;
color: #52B6FF;
display:flex;
justify-content:center;
margin-top:25px;
`
