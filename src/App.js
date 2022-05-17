
import Login from './componets/Login';
import {BrowserRouter,Routes, Route,}from 'react-router-dom'

import Welcome from './componets/Welcome';
import "./signup.css"
function App() {
  return (
   
    // <Login />
   <BrowserRouter>
    
       <Routes>
         <Route exact path="/" element={<Login/>}/>
         <Route  path="/welcome" element={<Welcome/>}/>
        </Routes>
       
    </BrowserRouter>
  );
}

export default App;
