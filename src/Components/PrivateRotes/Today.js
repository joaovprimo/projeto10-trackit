import { getHabtToday } from "../Axios"
import { useEffect, useState } from "react"

export default function Today(){
const [habits, setHabits] = useState ([])
    useEffect( ()=> {
        getHabtToday().then((hbt)=>{
            setHabits(hbt.data);
        }) 
    }, [])
console.log(habits);

    return(
    <>
<h1>oii</h1>
</>
    )
}