import { useEffect, useState } from "react"
import Formu from "../../Context/Formu"
import { useNavigate } from "react-router-dom";
import { getHabtList, postHabit, deletHabit } from "../Axios";
import { useContext} from "react";
import UserContext from "../../Context/Context";
import styled from 'styled-components';

export default function Habito() {
    const {del} = useContext(UserContext);
    const [listHabits, setListHabits] = useState([]);
    const [creatingHabit, setCreatingHabit] = useState(false);
    const weekdays = [{ id: 0, name: "D", dayName: "Domingo", clicked: false },
    { id: 1, name: "S", dayName: "Segunda", clicked: false },
    { id: 2, name: "T", dayName: "Terça", clicked: false },
    { id: 3, name: "Q", dayName: "Quarta", clicked: false },
    { id: 4, name: "Q", dayName: "Quinta", clicked: false },
    { id: 5, name: "S", dayName: "Sexta", clicked: false },
    { id: 6, name: "S", dayName: "Sabado", clicked: false }];
    const [namehbt, setNamahbt] = useState("");
    const [days, setDays] = useState([]);
    console.log(namehbt);
    const navigate = useNavigate();
console.log(listHabits);
    function data(e) {
        e.preventDefault();

        const formhabit = {
            name: namehbt,
            days: days,
        }
        console.log(formhabit);
        postHabit(formhabit).then((e) => { 
            getHabtList().then((hbt) => {
                setCreatingHabit(!creatingHabit);
                setListHabits(hbt.data);
                setNamahbt("");
                setDays([]);
            })
        }
        ).catch(()=> alert("Erro ao criar tente novamente"));
    }

    function delet(id){
        if(window.confirm("Você realmente quer excluir este hábito?")===true){ ( deletHabit(id).then((e) => { 
            getHabtList().then((hbt) => {
                setListHabits(hbt.data);
            })
        }).catch(()=> console.log("deuRuim")))}
        else{
return null;
        } 
    }
    useEffect(() => {
        getHabtList().then((hbt) => {
            setListHabits(hbt.data);
        })
    }
        , [])


    if (listHabits.length === 0) {
        return (
            <>
                <Top>
                    <span>Meus hábitos</span>
                    <button onClick={() => setCreatingHabit(!creatingHabit)}> + </button>
                </Top>
                {creatingHabit ?
                    (<Content>
                        <BoxCreatingHabit>
                            <Formu onSubmit={data}>
                                <input type="text" placeholder="nome do hábito" value={namehbt} name="name" onChange={e => setNamahbt(e.target.value)} />
                                <Days>{weekdays.map((day) => <Day key={day.id} clicked={day.clicked}
                                    onClick={() => selectday(days, setDays, day)}>
                                    {day.name}
                                </Day>)}
                                </Days>
                                <Buttons>
                                    <Cancel onClick={() => setCreatingHabit(!creatingHabit)} >Cancelar</Cancel>
                                    <Save type="submit">Salvar</Save>
                                </Buttons>
                            </Formu>
                        </BoxCreatingHabit>
                        <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
                    </Content>) :
                    (<Content>
                        <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
                    </Content>)}

            </>
        );

    } else {
        return (
            <>
            <Top>
            <span>Meus hábitos</span>
            <button onClick={() => setCreatingHabit(!creatingHabit)}> + </button>
        </Top>
    {creatingHabit ?  
        (<Content>
            <BoxCreatingHabit>
                <Formu onSubmit={data}>
                    <input type="text" placeholder="nome do hábito" value={namehbt} name="name" onChange={e => setNamahbt(e.target.value)} />
                    <Days>{weekdays.map((day) => <Day key={day.id} clicked={day.clicked}
                        onClick={() => selectday(days, setDays, day)}>
                        {day.name}
                    </Day>)}
                    </Days>
                    <Buttons>
                        <Cancel onClick={() => setCreatingHabit(!creatingHabit)} >Cancelar</Cancel>
                        <Save type="submit">Salvar</Save>
                    </Buttons>
                </Formu>
            </BoxCreatingHabit>
        </Content>): 
                    ( <Content>
                       
                        {listHabits.map((hb)=>  <Habit> <BoxHabibt>
                            <h1>{hb.name}</h1>
                            <Days>{weekdays.map((day) => <Day key={day.id} idday={day.id} hbindex={hb.days} clicked={day.clicked}>
                        {day.name}
                    </Day>)}
                    </Days>
                        </BoxHabibt> 
                        <img src={del} alt="delete" onClick={()=> delet(hb.id) } />
                        </Habit>)}
                       
                    </Content> )
        }
        </>
        )    
    }

}

function selectday(days, setDays, day) {
    console.log(day);
    if (days.includes(day.id)) {
        setDays(days.filter(id => id !== day.id))
        day.clicked = !day.clicked;
        console.log(day)
        return
    } else {
        setDays([...days, day.id])
        day.clicked = !day.clicked;
        console.log(day)
    }

}


//Styled-componentes

const Top = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:35px;
margin: 0px 20px;
margin-top:30px;

span{
    font-weight: 400;
font-size: 25px;
line-height: 29px;
    color:#126BA5;
}
button{
    width:40px;
    height:35px;
    border-radius:4.63636px;
    font-size: 26.976px;
    line-height: 34px;
    color:#ffffff;
    background-color:#52B6FF;
    display:flex;
    align-items:center;
    justify-content:center;
    border-style:none;
}
`
const Content = styled.div`
margin: 25px;
display:flex;
flex-direction:column;
justify-content:center;

h1{
    font-weight: 400;
font-size: 20px;
line-height: 22px;
color: #666666;
}
`
const BoxCreatingHabit = styled.div`
width: 480px;
height: 180px;
background-color:#ffffff;
border-radius: 5px;
margin-bottom:30px;
padding:20px;
`
const Days = styled.div`
display:flex;
`

const Day = styled.div`
width: 30px;
height: 30px;
border: 1px solid #D5D5D5;
border-radius: 5px;
color: ${props => props.clicked || props.idday === props.hbindex ? "#FFFFFF" : "#DBDBDB"};
background-color: ${props => props.clicked || props.idday === props.hbindex ? "#CFCFCF" : "#FFFFFF"};
margin-right:5px;
display:flex;
justify-content:center;
align-items:center;
`

const Cancel = styled.button`
color:rgba(82, 182, 255, 1);
width:84px;
height:35px;
border:none;
background-color:#FFFFFF;

`
const Save = styled.button`
color:#ffffff;
width:84px;
height:35px;
border:none;
background-color:rgba(82, 182, 255, 1);
border-radius: 4.63636px;
margin-left:15px;
`
const Buttons = styled.div`
margin-top:35px;
display:flex;
justify-content:end;
`
const Habit = styled.div`
width: 480px;
height:90px;
background-color:#ffffff;
border-radius: 5px;
margin-bottom:30px;
padding:20px;
display:flex;

img{
    width:15px;
    height:15px;
    display:flex;
    margin-left:180px;
}
`
const BoxHabibt = styled.div`
h1{
    margin-bottom:10px;
}

`