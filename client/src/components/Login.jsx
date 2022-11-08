import React, { useState } from "react";

function Login(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("")
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userName, password)
    }

    const onTextChange = (e) => {
        if (e.target.id === "username")
            setUserName(e.target.value);
        if (e.target.id === "password")
            setPassword(e.target.value);
    }
    return (<>
        <div className="Login">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Global bank admin Login</h1>
                </div>
            </div>
            <form className="loginForm">

                <div className="form-outline mb-4">
                    <input type="email" id="username" className="form-control" value={userName} onChange={onTextChange} />
                    <label className="form-label" htmlFor="username" >Username</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="password" className="form-control" value={password} onChange={onTextChange} />
                    <label className="form-label" htmlFor="password">Password</label>
                </div>

                {/* <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div> */}

                <button type="button" className="btn btn-primary btn-block mb-4" onClick={onSubmit}>Sign in</button>
            </form>

        </div>
    </>);
}


export default Login;