import React from 'react';
import axios from 'axios';
import {useEffect,useState} from 'react';

function Signup() {
  const [user,setUser] = useState({})
  const handleChange=(e)=>{
    if (e.target.name === 'isadmin'){
      setUser({...user,[e.target.name]:e.target.checked?1:0})
    
    // console.log(e.target.checked)
    }
    else{
      setUser({...user,[e.target.name]:e.target.value})
    }
    
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/signup',user).then((data)=>{
          console.log(data);
        })
  }
  
  useEffect(()=>{
    console.log(user)
  },[user])
  return (
    <div className='signup'>
      <form>
        <div>
          <label for ="firstname">Enter first name</label>
          <input type= 'text' name='first_name' id='firstname' onChange={handleChange}/>
        </div>
        <div>
          <label for ="lastname">Enter last name</label>
          <input type= 'text' name='last_name' id='lastname' onChange={handleChange}/>
        </div>
        <div>
          <label for ="email">Enter email</label>
          <input type= 'text' name='email' id='email' onChange={handleChange}/>
        </div>
        <div>
          <label for ="password">Enter password</label>
          <input type= 'text' name='password' id='password' onChange={handleChange}/>
        </div>
        <div className='isadmin'>
          <input type='checkbox' name='isadmin' id='isadmin' onChange={handleChange}/>
          <label for ="isadmin">Signup as Admin</label>
        </div>
        <div>
          <input type= 'submit' onClick={handleSubmit}/>
        </div>
      </form>
    </div>
  )
}

export default Signup