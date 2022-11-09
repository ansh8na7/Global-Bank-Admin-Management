import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import isLoggedIn from "../auth/loginAuth";

function Login(props) {
    const navigate = useNavigate();

    useEffect(() => {

        if (isLoggedIn()) {
            navigate("/operations");
        }
    })


    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(userName, password);

        let res = await axios.post("/api/login", {
            "userName": userName,
            "password": password
        });
        console.log(res);
        if (res.data === true) {
            localStorage.setItem("adminToken", userName + password);
            setLoginError(false);
            navigate("/operations");
        } else {
            setLoginError(true);
        }

    }

    const onTextChange = (e) => {
        if (e.target.id === "username")
            setUserName(e.target.value);
        if (e.target.id === "password")
            setPassword(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
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
            {loginError && <div className="alert alert-danger alert-dismissible d-flex align-items-center fade show">
                <strong className="mx-2">Error!</strong> A problem has been occurred while submitting your data.
                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
            </div>}

        </div>
    </>);
}


export default Login;

