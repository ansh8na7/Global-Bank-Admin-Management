import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "../App.css";
import data from "../mock-data.json";
import EditableRow from "./EditableRows";
import ReadOnlyRow from "./ReadOnlyRows";
import isLoggedIn from "../auth/loginAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const News = ({ handleAddFormChange, handleAddFormSubmit}) => {

  const navigate = useNavigate();
  
  useEffect(() => {
      
    if(!isLoggedIn()){
        navigate("/");
    }

})

  
   
return (
    <div className="app-container"> 

    
<h1 className="c">Open a Customer Account</h1>
      <div className="form">

      <form id="my_form" onSubmit={handleAddFormSubmit}>
  <div className="container">
    <p>Please fill in this form to create a customer account.</p>
    <hr></hr>

    <label for="accountNo"><b>Account Number</b></label>
    <input type="text" placeholder="Enter Account Number" name="AccountNo" id="accountNo" required onChange={handleAddFormChange}></input>

    <label for="customerNo"><b>Customer Number</b></label>
    <input type="text" placeholder="Enter Customer Number" name="CustomerNo" id="customerNo" required onChange={handleAddFormChange}></input>

    <label for="BranchId"><b>Branch Id</b></label>
<select type="text" id="branch" name="BranchId" onChange={handleAddFormChange}>
<option value="" disabled selected required>Select your option</option>
<option value="B001">B001</option>
<option value="B002">B002</option>
<option value="B003">B003</option>
<option value="B004">B004</option>
<option value="B005">B005</option>
</select>

<label for="Balance"><b>Opening Balance</b></label>
<input 
  type="number" 
  name="Balance" 
  required="required" 
  placeholder="Enter Opening Balance"
  min="5000"
  onChange={handleAddFormChange}
  />

<label for="OpeningDate"><b>Account Opening Date</b></label>
<input 
  type="date" 
  name="OpeningDate" 
  required="required" 
  placeholder="Enter Account Opening Date"
  onChange={handleAddFormChange}
  />

<label for="AccountType"><b>Account Type</b></label>
<select id="type" name="type">
<option value="" disabled selected required>Select your option</option>
<option value="saving">Saving</option>
<option value="current">Current</option>
</select>

<label for="AccountStatus"><b>Account Status</b></label>
<select id="status" name="status">
<option value="" disabled selected required>Select your option</option>
<option value="active">Active</option>
<option value="inactive">Inactive</option>
</select>


<hr></hr>
    <p>Once created, this customer account will be added to the table of already existing customer of this Bank.</p>

    <button type="submit" id="butn" className="button btn" >Add</button>
  </div>
  
  
</form>
</div>
    </div>
    
)

}  

export default News;