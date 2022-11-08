import React from 'react'
import { useNavigate } from 'react-router-dom';

const Signout = () => {
    const navigate = useNavigate();
    const signOut = ()=>{
        localStorage.removeItem("adminToken");
        navigate("/");
    }
  return (
    <button type="button" className="btn btn-danger operations-btn" name="addBranch" onClick={signOut}>Sign Out</button>
  )
}

export default Signout;