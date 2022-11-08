import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("")
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userName, password);
        if(userName==="ansh" && password==="asdf"){
            localStorage.setItem("adminToken",userName+password);
            navigate("/operations");
        }
    }

    const onTextChange = (e) => {
        if (e.target.id === "username")
            setUserName(e.target.value);
        if (e.target.id === "password")
            setPassword(e.target.value);
    }

    const handleKeyDown = (e)=>{
        if(e.key==="Enter"){
            onSubmit(e);
        }
    }


    return (<>
        <div className="Login">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Global bank admin Login</h1>
                </div>
            </div>
            <form className="loginForm" onKeyDown={handleKeyDown}>

                <div className="form-outline mb-4">
                    <input type="text" id="username" className="form-control" value={userName} onChange={onTextChange} />
                    <label className="form-label" htmlFor="username" >Username</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="password" className="form-control" value={password} onChange={onTextChange} />
                    <label className="form-label" htmlFor="password">Password</label>
                </div>
                <button type="button" className="btn btn-primary btn-block mb-4" onClick={onSubmit}>Sign in</button>
            </form>

        </div>
    </>);
}


export default Login;