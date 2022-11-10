import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import EditableRow from "./components/EditableRows";
import ReadOnlyRow from "./components/ReadOnlyRows";
import News from "./components/News";
import Tables from "./components/Tables";

import EditableRowBranch from "./components/EditableRowBranch";
import ReadOnlyRowBranch from "./components/ReadOnlyRowBranch";
import NewBranch from "./components/NewBranch";
import TableBranch from "./components/TableBranch";
import branchData from "./mock-data-branch.json"

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Login from './components/Login';
import Operations from './components/Operations';
import axios from "axios";


const App = () => {
  // const navigate = useNavigate();

  const [customerDetails, setCustomerDetails] = useState(data);
  const [branchDetails, setBranchDetails] = useState(branchData);

  useEffect(() => {
    fetchCustomerData();
    fetchBranchData();

  }, [])


  const fetchCustomerData = async () => {
    let res = await axios.get("/api/admin/customers");
    setCustomerDetails(res.data);
    console.log(customerDetails)
  }

  const fetchBranchData = async () => {
    let res = await axios.get("/api/admin/branches");
    // console.log(res.data);
    setBranchDetails(res.data)
  }


  const [addFormData, setAddFormData] = useState({
    AccountNo: '',
    CustomerNo: '',
    BranchId: '',
    Balance: '',
    OpeningDate: ''
  });

  const [addFormDataBranch, setAddFormDataBranch] = useState({
    BranchId: '',
    Name: '',
    City: ''
  });

  const [editFormData, setEditFormData] = useState({
    AccountNo: '',
    CustomerNo: '',
    BranchId: '',
    Balance: '',
    OpeningDate: ''
  });

  const [editFormDataBranch, seteditFormDataBranch] = useState({
    BranchId: '',
    Name: '',
    City: ''
  });

  const [editDetailsId, setEditDetailsId] = useState(null);
  const [editDetailsIdBranch, seteditDetailsIdBranch] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormChangeBranch = (event) => {
    event.preventDefault();

    // console.log("Change form: branch")
    // console.log(event.target.name,event.target.value);

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormDataBranch };
    newFormData[fieldName] = fieldValue;

    setAddFormDataBranch(newFormData);
  };


  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormChangeBranch = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormDataBranch };
    newFormData[fieldName] = fieldValue;

    seteditFormDataBranch(newFormData);
  };


  const handleAddFormSubmit = async (e) => {
    e.preventDefault();

    let res = await axios.post("/api/admin/customers/account", {
      "accountNumber": addFormData.AccountNo,
      "customerNumber": addFormData.CustomerNo,
      "branchId": addFormData.BranchId,
      "openingBalance": addFormData.Balance,
      "accountOpeningDate": addFormData.OpeningDate,
      "accountType": addFormData.accountType,
      "accountStatus": addFormData.accountStatus,
    });
    // console.log(res.data);
    if (res.data === true) {
      const newDetails = await axios.get("/api/admin/customers");
      setCustomerDetails(newDetails);
      // navigate("/table");

    }
  }


  const handleAddFormSubmitBranch = async (e) => {
    e.preventDefault();
    // let obj = {
    //   "branchId":addFormDataBranch.BranchId,
    //     "branchName":addFormDataBranch.Name,
    //     "branchCity":addFormDataBranch.City,
    // }
    // // console.log(obj);

    // let res = await axios.post("/api/admin/branches",{

    //     "branchId":addFormDataBranch.BranchId,
    //     "branchName":addFormDataBranch.Name,
    //     "branchCity":addFormDataBranch.City,

    // });
    // // console.log(res.data);
    // if(res.data===true){
    //     const newDetails =await  axios.get("/api/admin/branches");
    //     setCustomerDetails(newDetails);
    //     // navigate("/table");

    // }
    const select = document.querySelector("select");
    const value = select.options[select.selectedIndex].value;
    const text = select.options[select.selectedIndex].text;

    const newCustomerDetails = {

      id: nanoid(),
      branchId: addFormData.BranchId,
      branchName: addFormData.Name,
      branchCity: text,
    };

    const newDetails = [...customerDetails, newCustomerDetails];
    setCustomerDetails(newDetails);

  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    let res = await axios.post("/api/admin/customers/account", {
      "accountNumber": editFormData.AccountNo,
      "customerNumber": editFormData.CustomerNo,
      "branchId": editFormData.BranchId,
      "openingBalance": editFormData.Balance,
      "accountOpeningDate": editFormData.OpeningDate,
      "accountType": editFormData.accountType,
      "accountStatus": editFormData.accountStatus,
    });
    // console.log(res.data);
    if (res.data === true) {
      const newDetails = await axios.get("/api/admin/customers");
      setCustomerDetails(newDetails);
    }


    setEditDetailsId(null);

  };

  const handleEditFormSubmitBranch = async (event) => {
    event.preventDefault();

    let res = await axios.post("/api/admin/branches", {
      "BranchId": editFormDataBranch.BranchId,
      "BranchName": editFormDataBranch.Name,
      "BranchCity": editFormDataBranch.City,

    });
    // console.log(res.data);
    if (res.data === true) {
      const newDetails = await axios.get("/api/admin/branches");
      setBranchDetails(newDetails);
    }


    seteditDetailsIdBranch(null);

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


  const handleEditClickBranch = (event, details) => {
    event.preventDefault();
    seteditDetailsIdBranch(details.id);

    const formValues = {
      BranchId: details.BranchId,
      BranchName: details.Name,
      BranchCity: details.City
    };

    seteditFormDataBranch(formValues);
  };

  const handleCancelClick = () => {
    setEditDetailsId(null);
  };
  const handleCancelClickBranch = () => {
    seteditDetailsIdBranch(null);
  }; 
  const handleDeleteClick = (detailsId) => {
    const newDetails = [...customerDetails];
    const index = customerDetails.findIndex((details) => details.id === detailsId);
    newDetails.splice(index, 1);
    setCustomerDetails(newDetails);

    // let res=axios.delete("/api/admin/customers/account/{account_no}");
    //  if(res.data===true){
         
    //   const newDetails = await axios.get("/api/admin/customers");
    //   setCustomerDetails(newDetails);
  };

  const handleDeleteClickBranch = (detailsId) => {
    const newDetails = [...branchDetails];
    const index = branchDetails.findIndex((details) => details.id === detailsId);
    newDetails.splice(index, 1);
    setBranchDetails(newDetails);

    // let res=axios.delete("/api/admin/customers/account/{account_no}");
    //  if(res.data===true){
         
    //   const newDetails = await axios.get("/api/admin/customers");
    //   setCustomerDetails(newDetails);
  };
 
   
  return (
    <div className="app-container">

      <h1 className="header-1">Global Bank Admin Management System ⇅</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/operations" element={<Operations />} />

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
            handleAddFormSubmit={handleAddFormSubmit} />}></Route>
          <Route path="/newbranch" element={<NewBranch customerdetails={customerDetails}
            handleAddFormChangeBranch={handleAddFormChangeBranch}
            handleAddFormSubmitBranch={handleAddFormSubmitBranch} />}></Route>
          <Route path="/tablebranch" element={<TableBranch 
            branchDetails={branchDetails}
            editDetailsIdBranch={editDetailsIdBranch}
            handleEditFormSubmitBranch={handleEditFormSubmitBranch}
            editFormDataBranch={editFormDataBranch}
            handleEditFormChangeBranch={handleEditFormChangeBranch}
            handleCancelClickBranch={handleCancelClickBranch}
            handleEditClickBranch={handleEditClickBranch}
            handleDeleteClickBranch={handleDeleteClickBranch}></TableBranch>}></Route>

        </Routes>
      </BrowserRouter>

      <p className="footer">For more information, Visit website</p>

    </div>



  );
};


export default App;