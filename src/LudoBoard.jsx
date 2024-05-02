import { useState } from "react"
export default function LudoBoard(){
    let [moves,setMoves]=useState({blue:0 ,red:0,yellow:0,green:0})
   let [arr,SetArr]= useState(["no value"]);
    let updateBlue=()=>{
setMoves((prevMoves)=>{
return  { ...prevMoves,blue:prevMoves.blue +1}});

SetArr([...arr,"blue value"]);
console.log(arr);
   }
   let updateYellow=()=>{
    setMoves((prevMoves)=>{
    return  { ...prevMoves,yellow:prevMoves.yellow +1}});
       }
    
   return (
<div>
    <p> Game Begins!</p>
    <div className="board">
        <p> {arr}</p>
        <p> Blue moves={moves.blue} </p>
        <button style={{backgroundColor:"blue"}} onClick={updateBlue}> +1</button>
        <p> red moves= {moves.red}</p>
        <button style={{backgroundColor:"red"}}  > +1</button>
        <p> yellow moves={moves.yellow}</p>
        <button style={{backgroundColor:"yellow"}} onClick={updateYellow}> +1</button>
        <p> green moves={moves.green} </p>
        <button style={{backgroundColor:"green"}}> +1</button>
    </div>
</div>

    )
}