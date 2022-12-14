import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "../App.css";
import data from "../mock-data.json";
import EditableRow from "./EditableRowBranch";
import ReadOnlyRow from "./ReadOnlyRowBranch";
import isLoggedIn from "../auth/loginAuth";
import { useNavigate } from "react-router-dom";


const NewBranch = ({handleAddFormChangeBranch, handleAddFormSubmitBranch}) => {
    const navigate = useNavigate();
    useEffect(() => {
      
        if(!isLoggedIn()){
            navigate("/");
        }
    })

return (
    <div className="app-container"> 
<h1 className="c">Open a Branch</h1>
      <div className="form">

      <form onSubmit={handleAddFormSubmitBranch}>
  <div className="container">
    <p>Please fill in this form to create a branch.</p>
    <hr></hr>

    <label for="BranchId"><b>Branch Id</b></label>
    <input type="text" placeholder="Enter Branch Id" name="BranchId" id="BranchId" required onChange={handleAddFormChangeBranch}></input>

    <label for="Name"><b>Branch Name</b></label>
    <input type="text" placeholder="Enter Branch Name" name="Name" id="Name" required onChange={handleAddFormChangeBranch}></input>

    <label for="City"><b>City</b></label>
<select id="City" name="City" onChange={handleAddFormChangeBranch}>
<option value="" disabled selected required>Select your option</option>
<option value="Delhi">Delhi</option>
<option value="Mumbai">Mumbai</option>
<option value="Chennai">Chennai</option>
</select>



<hr></hr>
    <p>Once created, this branch will be added to the table of already existing branch of this Bank.</p>

    <button type="submit" className="btn">Add</button>
  </div>
  
  
</form>
</div>
    </div>
    
)

}  

export default NewBranch;
