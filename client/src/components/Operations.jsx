import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import isLoggedIn from "../auth/loginAuth";
import Signout from './Signout';

const Operations = () => {
    const navigate = useNavigate()

    useEffect(() => {
      
        if(!isLoggedIn()){
            navigate("/");
        }
    })
    

    const redirectCustomerDetails = (e)=>{
        navigate("/table");
    }

    const redirectBranchDetails = (e)=>{
        console.log(e.target.name)
    }

    const redirectAddCustomer = (e)=>{
        navigate("/new");
    }

    const redirectAddBranch = (e)=>{
        console.log(e.target.name)
    }

    return (
        <div className='operations'>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Global bank admin operations</h1>
                </div>
            </div>
            <div className="operation-buttons">
                <button type="button" className="btn btn-primary operations-btn" name="customerDetails" onClick={redirectCustomerDetails}>Customers details</button>
                <button type="button" className="btn btn-primary operations-btn" name="BranchDetails" onClick={redirectBranchDetails}>Branch Details</button>
                <button type="button" className="btn btn-primary operations-btn" name='addCustomer' onClick={redirectAddCustomer}>Add Customer </button>
                <button type="button" className="btn btn-primary operations-btn" name="addBranch" onClick={redirectAddBranch}>Add  Branch</button>
                <Signout />
            </div>
        </div>
    )
}

export default Operations;