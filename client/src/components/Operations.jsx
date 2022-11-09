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
        navigate("/tablebranch");
    }

    const redirectAddCustomer = (e)=>{
        navigate("/new");
    }

    const redirectAddBranch = (e)=>{
        navigate("/newbranch");
    }

    return (
        <div className='operations'>
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