import axios from 'axios'
import React, { useEffect } from 'react'

function ConfirmDelete(props) {
    function rmv(){
        axios.delete(`http://127.0.0.1:8000/deleteproblem/${props.remove}`).then(data=>{
           props.setshow(false)
            console.log(data)
        })
    }

    console.log(props.remove)
  return (
    <div className='confirmdelete'>
        <div className="container">
            <div className="msg">Do you really want to delete?</div>
            <div className="proceed" onClick={rmv} >Yes</div>     
            <div className="cancel" onClick={()=>{props.setshow(false)}}>Cancel</div>
        </div>
    </div>
  ) 
}  
export default ConfirmDelete