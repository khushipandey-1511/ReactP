import { useState } from "react"
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default  function Comment(){
    let [comment,setComment]=useState([{
        username:"gsk",
        remarks:"great job",
        rating:5
    }])
let  addNewComment=(comment)=>{
        setComment((currComment)=>[...currComment,comment]);
    console.log(" new commnt is added")
    }
    return (
         <>
          <div> 
        <h3> All comments</h3>
        <div className="comment">
            <span>{comment[0].remarks}</span>
            &nbsp;
            <span> rating={comment[0].rating}</span>
            &nbsp;
            <p>-@{comment[0].username}</p>
        </div>
        </div>
        <hr></hr>
        <CommentsForm addNewComment={addNewComment}/>
        </>
    );
    
}