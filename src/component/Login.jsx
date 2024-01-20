import react,{useState,useContext}from 'react';
import UserContext from '../context/UserContext';


function login(){
    const [pass,setpass]=useState('');
    const [name,setUserName]=useState('');
    const {setuser}=useContext(UserContext)    
    const handleSubmit = (e)=>{
        e.preventDefault()
        setuser({name,pass})

    }
    return (
        <div>
           <h1> Login</h1>
            <input type='text' value={username} onChange={(e)=>setusername(e.target.value)} placeholder='username'/>
           <br/> <input type='text' value={pass} onChange={(e)=>setpass(e.target.value)} placeholder='password'/>
            <button onClick={handleSubmit}>
submit
            </button>


            </div>
        
    )
}
export default login;
