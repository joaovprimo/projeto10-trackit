import {postUncheckHabit } from "../Axios";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import styled from 'styled-components';
import {getHabtToday, postChackHabit} from "../Axios";
import { useContext} from "react";
import UserContext from "../../Context/Context";
import updateLocale from "dayjs/plugin/updateLocale";


export default function Today() {
    const {cont, setCont, setDoneToday, doneToday} = useContext(UserContext);
    const day = dayjs().format("DD/MM");
    const weekday = dayjs().locale("pt-br").format("dddd");
    const [clicked, setClicked] = useState(false);
    const [habits, setHabits] = useState([]);
   setCont(habits.filter(hbt=> hbt.currentSequence>0).length); 

    setDoneToday(habits.length);

    const percentage = Math.round((cont/doneToday)*100);
    useEffect(() => {
        getHabtToday().then((hbt) => {
            setHabits(hbt.data);
        })
    }, [])
    
    
function unCheck(hbt){
    postUncheckHabit(hbt).then(()=> getHabtToday().then((hbt) => {
        setHabits(hbt.data);   
    })
    ).catch(()=> console.log("deu erro")); 
    if(cont > 0){
        setCont(cont-1);
    }
   
}

    function done(hbt){
        postChackHabit(hbt).then(()=> getHabtToday().then((hbt) => {
            setHabits(hbt.data);
        })
        ).catch(()=> console.log("deu erro"));
        setCont(cont+1);
    }

    return (
        <>
            <Content>
                    
                {cont === 0 ?
                (  <Date color={""}><span>{weekday}, {day}</span><p>Nenhum hábito concluído ainda</p></Date>) 
                : (<Date color={"green"}><span>{weekday}, {day}</span> <p>{percentage}% dos habitos concluídos</p></Date>)
                  }
                
                <ListHabts>
                    {habits.map((hbt, i) => <><Habit> 
                       {hbt.currentSequence===hbt.highestSequence ?
                        (<><BoxHabibt color={"green"}>
                        <h1>{hbt.name}</h1> <p>Sequência atual: {hbt.currentSequence} dias</p>
                        <p>Seu recorde: {hbt.highestSequence} dias </p> 
                        </BoxHabibt></>)
                        :
                        (<><BoxHabibt color={""}>
                        <h1>{hbt.name}</h1><p>Sequência atual: {hbt.currentSequence} dias</p>
                        <p>Seu recorde: {hbt.highestSequence} dias </p></BoxHabibt></>)
                         }
                       
                    {hbt.done ? (<Click onClick={()=>unCheck(hbt) }done={hbt.done}>
                    <ion-icon name="checkbox" ></ion-icon>
                    </Click>) :( <Click onClick={()=>done(hbt)}>
                    <ion-icon name="checkbox"></ion-icon>
                    </Click>)}
                    
                    </Habit>
                    </>)}
                </ListHabts>
            </Content>
        </>
    )
}



const Content = styled.div`
h1{
    font-weight: 400;
font-size: 20px;
line-height: 22px;
color: #666666;
}
`

const Date = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:space-between;
height:35px;
margin: 0px 20px;
margin-top:30px;
margin-bottom:30px;

span{
    font-weight: 400;
font-size: 23px;
line-height: 29px;
    color:#126BA5;
    font-family: 'Lexend Deca';
}
p{
    font-size: 20px;
line-height: 20px;
color: ${props=>props.color === "" ? ("#BABABA") :("#8FC549") };
font-family: 'Lexend Deca';
}
`
const ListHabts = styled.div`

`

const BoxHabibt = styled.div`
margin-left:10px;
h1{
    margin-bottom:10px;
    font-family: 'Lexend Deca';
    font-size: 18px;
}
p{
    font-size: 13px;
line-height: 16px;
color: ${props=> props.color===""? ("#BABABA") :("#8FC549")};
font-family: 'Lexend Deca';
}

`

const Habit = styled.div`
margin-left:20px;
width: 480px;
height:90px;
background-color:#ffffff;
border-radius: 5px;
margin-bottom:30px;
padding:10px;
display:flex;
`
const Click = styled.div`
ion-icon{
    color: ${props=>props.done? `#8FC549`: `#EBEBEB`};
    margin-left:220px;
    width:70px;
    height:70px;
}
`