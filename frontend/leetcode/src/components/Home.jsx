import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ConfirmDelete from './ConfirmDelete'

function Home() {
  const [original,setOriginal] = useState([])
  const [data,setData] = useState([])
  const[showdel,setshowdel] = useState(false)
  const[remove,setremove]= useState()

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/problems').then(data=>{
      console.log(data)
      setOriginal(data.data.data)
      setData(data.data.data)
    })
  },[])

  return (
    <div className='home'>
     {showdel? <ConfirmDelete setshow={setshowdel} remove={remove}/>:''}
      <div>
        <input type="text" placeholder='Search' />
      </div>
      <table>
        <tr>
        <th>S.no</th>
        <th>Title</th>
        {/* <th>Description</th> */}
        <th>Difficulty</th>
        <th>Solution</th>
        <th>View</th>
        <th>Delete</th>
        </tr>
        {
        data.map((e,i)=>(
          <tr key={i+1}>
            <td>{i+1}</td> 
            <td>{e.title}</td>
            {/* <td>{e.description}</td> */}
            <td>{e.difficulty}</td>
            <td>{e.solution?"available":"unavailable"}</td>
            <Link to={`showproblem/${e.id}`}><td>view</td></Link>
            
            <td onClick= {()=>{setshowdel(true); setremove(e.id)}}>delete</td>
          </tr>

        ))
      }
      </table>
    </div>
  )
}

export default Home