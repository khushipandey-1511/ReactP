import { useState, useSyncExternalStore } from "react"

export default function Form(){
   let [formData,setFormData]=useState({
    fullName:"",
    userName:"",
    password:"",
   })
//     let handleNameChange=(event)=>{
//          setFulName(event.target.value);

//     }
//     let handleUsername=(event)=>{
//         setUserName(event.target.value);
// }
let handleInputchange=()=>{
   
    
    setFormData((currData)=>{

return {...currData,
    [event.target.name]:event.target.value
};
    })
}
let handleSubmit=(event)=>{
    console.log(formData)
    event.preventDefault();
    setFormData({
        fullName:"",
        userName:"",
        password:"",
    })
}

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full name:</label>
            <input placeholder=" enter your full name"
             type="text" value={formData.fullName} 
             id="fullName"
             name="fullName"
             onChange={handleInputchange}
            />
<br/>
<label htmlFor="userName">Username:</label>
<input placeholder=" enter user name"
             type="text" value={formData.userName} 
             id="userName"
             name="userName"
             onChange={handleInputchange}/>
             <br/>

<label htmlFor="password">Password:</label>
<input placeholder=" enter your password"
             type="number" value={formData.password} 
             id="password"
             name="password"
             onChange={handleInputchange}/>
             
            <button> submit it</button>
        </form>
    )
}