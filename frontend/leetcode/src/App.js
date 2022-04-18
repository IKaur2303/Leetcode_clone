import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './components/Home';
import AddProblem from './components/AddProblem';
import ShowProblem from './components/ShowProblem';
import UpdateProblem from './components/UpdateProblem';
import Login from './components/Login';
import Signup from './components/Signup';



function App() {
  return (
    <>
    <div className="nav">
    <span>LOGO</span>
    <ul>
     <Link to = '/'> <li>Home</li></Link>
     <Link to = 'signup'><li>Sign up</li></Link>
     <Link to = 'login'><li>Login</li></Link>
     <Link to = 'addproblem'><li>AddProblem</li></Link>
    </ul>
    </div>

    <Routes>
      <Route exact path ='/' element ={<Home/>}/> 
      <Route exact path = 'addproblem' element ={<AddProblem/>}/>
      <Route exact path = 'updateproblem/:id' element ={<UpdateProblem/>}/>
      <Route exact path = 'showproblem/:id' element ={<ShowProblem/>}/>
      <Route exact path = 'addproblem' element ={<AddProblem/>}/>
      <Route exact path = 'login' element ={<Login/>}/>
      <Route exact path = 'signup' element ={<Signup/>}/>
      
    </Routes>
    </>
  );
}

export default App


