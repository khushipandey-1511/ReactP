import { useState } from "react"

export default function CommentsForm(addNewComment){
    let [formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:5,
    })
    let handleInputchange=(event)=>{
        setFormData((currData)=>{
return {...currData,[event.target.name]:event.target.value}
})}
let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(formData)
    addNewComment(formData);
   
    setFormData({
        username:"",
        remarks:"",
        rating:"",

    })
}


    return <div>
        <h2>give a comment</h2>
        <form onSubmit={handleSubmit}> 
        <label htmlFor="username">Username</label>
            <input
            placeholder="userName"type="text"  
            id="username"
            onChange={handleInputchange}
            name="username"
            value={formData.username}/>
            <br/>
            <br/>
            <label htmlFor="remarks">Remarks</label>
            <textarea value={formData.remarks} 
             onChange={handleInputchange}
             placeholder="add some remarks"
             id="remarks"
             name="remarks"></textarea>
            <br/>
            <label htmlFor="rating">Rating</label>
            <input placeholder="rating" 
            type="number"
            id="rating"
            value={formData.rating}
            min={1} max={5}
            onChange={handleInputchange}
            name="rating"/>
            <br/>
            <button> Add Comment</button>
        </form>
    </div>
}