import axios from 'axios';
import React from 'react'
import {useEffect,useState} from 'react';


function Login() {

  const [user,setUser] = useState({})

  const handleLogin =(e)=>{
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/login',user).then(data=>{
      console.log(data)
    })
  }

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  useEffect(()=>{
    console.log(user)
  },[user])

  return (
    <div className='login'>
      <form>
        <div><h1>Login-Form</h1></div>
      <div>
          <label for ="email">Enter email</label>
          <input type= 'text' name='email' id='email' onChange={handleChange}/>
        </div>
        <div>
          <label for ="password">Enter password</label>
          <input type= 'text' name='password' id='password' onChange={handleChange}/>
        </div>
        <div>
          <input type= 'submit' onClick={handleLogin}/>
        </div>
      </form>
    </div>
  )
}

export default Login