import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../App.css";
import data from "../mock-data.json";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";


const New = ({handleAddFormChange, handleAddFormSubmit}) => {
   
return (
    <div className="app-container"> 
<h1 class="c">Open a Customer Account</h1>
      <div className="form">

      <form onSubmit={handleAddFormSubmit}>
  <div class="container">
    <p>Please fill in this form to create a customer account.</p>
    <hr></hr>

    <label for="BranchId"><b>Branch Id</b></label>
    <input type="text" placeholder="Enter Account Number" name="BranchId" id="BranchId" required onChange={handleAddFormChange}></input>

    <label for="Name"><b>Customer Number</b></label>
    <input type="text" placeholder="Enter Customer Number" name="Name" id="Name" required onChange={handleAddFormChange}></input>

    <label for="City"><b>City</b></label>
<select type="text" id="City" name="City">
<option value="" disabled selected required>Select your option</option>
<option value="Delhi">Delhi</option>
<option value="Mumbai">Mumbai</option>
<option value="Chennai">b003</option>
</select>



<hr></hr>
    <p>Once created, this customer account will be added to the table of already existing customer of this Bank.</p>

    <button type="submit" className="btn">Add</button>
  </div>
  
  
</form>
</div>
    </div>
    
)

}  

export default New;