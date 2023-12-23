import './style.css';
import React,{useState} from 'react';
import axios from 'axios'
const Add_user=()=>{
    const[username,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPhoneNo]=useState('');
    const[alert,setAlert]=useState('');
    function onHandleSubmit(){
       console.log(username,email,password) 
       let data={
        username:username,
        email:email,
        password:password

       }
       let response=axios.post('http://localhost:5001/createUser',data).then(()=>{
        setAlert("User Added Successfully !");
        setName('');setEmail('');setPhoneNo('')
       });
     
     
    }
    return(
        <>
        <div className='add_user'>
        <h1>add user {alert} </h1>
        <span>User Name</span>
        <input type="text" placeholder="Name" value={username}  onChange={(e)=>setName(e.target.value)}/>
        <span>Email</span>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <span>Password</span>
        <input type="password." placeholder="password" value={password} onChange={(e)=>setPhoneNo(e.target.value)}/>
        <button type="submit" onClick={onHandleSubmit}>Add User</button>
        </div>
        </>
    )
}

export default Add_user;