// Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

 const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const adminuser = "venu";
  const adminpass= "Password";
  const [wrongpass,setwrongpassword]= useState(false);
   const [userlogged,setuserlogged] = useState(false)
  const navigate = useNavigate();



  const handleLogin = (username,password) => {

    if(username===adminuser && password===adminpass)
    {
      setuserlogged(true)
        navigate(`/?username=${username}`);
        // navigate(`/?username=$(username)`);
    }else{
             setwrongpassword(true)
    }
    
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={()=>handleLogin(username,password)}>
          Login
        </button>
      </form>
       
       
    </div>
  );
};

export default Login;







// const Login = ()=>{
//     return (
        
//         <>
//         <form>
//             <input type="text" ></input>
//         </form>
//         </>
//     )
// }