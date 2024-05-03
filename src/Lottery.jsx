
import { useState } from "react"
import "./Lottery.css"
import Ticket from "./Ticket";
import{genTicket,sum}from "./helper";
import Button from "./Button";

export default function Lottery({n=3,winCondition}){
 
    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning = winCondition(ticket);
    let buyTicket=()=>{
        setTicket(genTicket(n))
    }
    return (
    <div> 
    <h1> Lottery Game!</h1>
    <Ticket ticket={ticket}/>
    <Button action={buyTicket}/>
   
    <h3> { isWinning && "congratulations , you won!"}</h3>
        </div>
)}