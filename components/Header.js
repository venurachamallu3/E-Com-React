import { Link, useParams,useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Header = ()=>{
            
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const username = params.get("username");
  const navigate = useNavigate();
  // console.log("USERNAME "+ username)


  useEffect(()=>{

    // navigate('/');
  },[])


    return(
        <>
        
        <header>
      <nav>
        <ul>
          <li>
            <Link to ='/about'>About.</Link>
          </li>
          <li>
          <Link to ='/gallery'>Gallery</Link>
          </li>
          <li>
          <Link to ='/contact'>Contact</Link>
          </li>
         
         {/* <h1>{username}</h1> */}


          { username==='venu' ? <li style={{ backgroundcolor:"red", width:"100px"}}> Hi , {username} </li>: <li>
          <Link to ='/login'>Login</Link>
          </li> }
          
         
        </ul>
      
      </nav>
    </header>
        
        </>
        
    )
}

export default Header;