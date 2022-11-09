import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import EditableRow from "./components/EditableRows";
import ReadOnlyRow from "./components/ReadOnlyRows";
import News from "./components/News";
import Tables from "./components/Tables";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Login from './components/Login';
import Operations from './components/Operations';
import axios from "axios";


const App = () => {
 axios.get("/api/admin/customers").then(({response}) => { setCustomerDetails(response.data);}).catch((error) => {console.log(error)});
     
  const [customerDetails, setCustomerDetails] = useState(data);

  const [addFormData, setAddFormData] = useState({
    AccountNo: '',
  CustomerNo: '',
  BranchId: '',
  Balance: '',
  OpeningDate:''
  });

  const [editFormData, setEditFormData] = useState({
    AccountNo: '',
  CustomerNo: '',
  BranchId: '',
  Balance: '',
  OpeningDate:''
  });

  const [editDetailsId, setEditDetailsId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  


const handleAddFormSubmit = async (e) => {
  e.preventDefault();
  console.log(userName, password);
  
  let res = await axios.post("/api/admin/customers/account",{
      "accountNumber":newCustomerDetails.AccountNo,
      "customerNumber":newCustomerDetails.CustomerNo,
      "branchId":newCustomerDetails.BranchId,
      "openingBalance":newCustomerDetails.Balance,
      "accountOpeningDate":newCustomerDetails.OpeningDate,
      "accountType":newCustomerDetails.accountType,
      "accountStatus": newCustomerDetails.accountStatus,
  });
  console.log(res.data);
  if(res.data===true){
      const newDetails =await  axios.get("/api/admin/customers");
      setCustomerDetails(newDetails);
  }


}

  const handleEditFormSubmit =async (event) => {
    event.preventDefault();

    let res = await axios.post("/api/admin/customers/account",{
      "accountNumber":editFormData.AccountNo,
      "customerNumber":editFormData.CustomerNo,
      "branchId":editFormData.BranchId,
      "openingBalance":editFormData.Balance,
      "accountOpeningDate":editFormData.OpeningDate,
      "accountType":editFormData.accountType,
      "accountStatus": editFormData.accountStatus,
  });
  console.log(res.data);
  if(res.data===true){
      const newDetails =await  axios.get("/api/admin/customers");
      setCustomerDetails(newDetails);
  }

   
    setEditDetailsId(null);
    
  };

  const handleEditClick = (event, details) => {
    event.preventDefault();
    setEditDetailsId(details.id);

    const formValues = {
      AccountNo: details.AccountNo,
    CustomerNo: details.CustomerNo,
    BranchId: details.BranchId,
    Balance: details.Balance,
    OpeningDate: details.OpeningDate
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditDetailsId(null);
  };

  const handleDeleteClick = (detailsId) => {
    const newDetails = [...customerDetails];

    const index = customerDetails.findIndex((details) => details.id === detailsId);

    newDetails.splice(index, 1);

    setCustomerDetails(newDetails);
  };

  return (
    <div className="app-container">
 
 <h1 className="header-1">Global Bank Admin Management System ⇅</h1>

<BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/operations" element={<Operations/>}/>
      
          {/* <Route index element={<Layouts />} /> */}
          <Route path="/table" element={<Tables customerDetails={customerDetails}
      editDetailsId={editDetailsId}
      handleEditFormSubmit={handleEditFormSubmit}
      editFormData={editFormData}
      handleEditFormChange={handleEditFormChange}
      handleCancelClick={handleCancelClick}
      handleEditClick={handleEditClick}
      handleDeleteClick={handleDeleteClick}></Tables>}></Route>
          <Route path="/new" element={<News customerDetails={customerDetails}
                    handleAddFormChange={handleAddFormChange}
                    handleAddFormSubmit={handleAddFormSubmit}/>}></Route>
      </Routes>
    </BrowserRouter>

    <p className="footer">For more information, Visit website</p>

    </div>
);
};

export default App;