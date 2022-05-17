import React ,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import Welcome from './Welcome'


export default function Login({history}) {
  const [name, setname] = useState("")
  const [password, setpassword] = useState("")
  const [cpassword, setcpassword] = useState("")
  const [mobile, setmobile] = useState("")
  const [chebox, setchebox] = useState(false)
  const [email, setemail] = useState("")
  
  const navigate=useNavigate();
    const handleChange=(e)=>{
      e.preventDefault()
    //  console.log(chebox);
     const value= chebox;
     console.log(value);
     if(value !== false && email !== "" && name !=="" && password==cpassword && mobile!==""){
       navigate("/welcome")
      console.log("helloe");
      }
    }
  return (
  <>

  <div className="Parent_Div">
   <div className="Box1">
    <img src="./img/ink.png" alt=""  className='Img '/>
    <div className="Centered">
    <h3>Choose a Date Range </h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tdignissimos at voluptates.</p>
    </div>
  </div>
   <div className="Box2">
       <div className="Form_Data">
        <form onSubmit={handleChange}>
          <h1>Create an Account</h1>
          <div className="container">
          <label>Your Email Address</label><br />
          <input type="email" onChange={(e)=>{setemail(e.target.value)
          console.log(email);}} className="inputbox" /><br />
         <label>Your password</label><br />
          <input type="password" onChange={(e)=>{setpassword(e.target.value)}} max={6} required className="inputbox" /><br />
         <label>Confirm password</label><br />
          <input type="password"  onChange={(e)=>{setcpassword(e.target.value)}} max={6} required className="inputbox" /><br />
         <label>Your Full Name</label><br />
          <input type="text"  onChange={(e)=>{setname(e.target.value)}} required className="inputbox" /><br />
         <label>Your phone number</label><br />
          <input type="tel"  onChange={(e)=>{setmobile(e.target.value)}} max={10} min={10} required className="inputbox" /><br />
          <br />
        <input type="checkbox" checked={chebox} onChange={(e)=>{setchebox(e.target.value)}}/>
        
        <label className="container"> I read and agree terms and conditions
        <span className="checkmark" ></span>
        </label>
        <br />
        <button className='btn'>Create Account</button>  
          </div>
     </form>
        
        </div> 
     </div>
    </div>
  </>
  )
}
