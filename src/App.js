import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import EditableRow from "./components/EditableRow";
import ReadOnlyRow from "./components/ReadOnlyRow";
import New from "./components/New";
import Table from "./components/Table";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Link } from "react-router-dom";




const App = () => {
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

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const select = document.querySelector("select");
const value = select.options[select.selectedIndex].value;
const text = select.options[select.selectedIndex].text;

    const newCustomerDetails = {
      id: nanoid(),
      AccountNo: addFormData.AccountNo,
    CustomerNo: addFormData.CustomerNo,
    BranchId: text,
    Balance: addFormData.Balance,
    OpeningDate: addFormData.OpeningDate,
    };

    

    const newDetails = [...customerDetails, newCustomerDetails];
    setCustomerDetails(newDetails);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedDetails = {
      id: editDetailsId,
      AccountNo: editFormData.AccountNo,
      CustomerNo: editFormData.CustomerNo,
      BranchId: editFormData.BranchId,
      Balance: editFormData.Balance,
      OpeningDate: editFormData.OpeningDate
    };

    const newDetails = [...customerDetails];

    const index = customerDetails.findIndex((details) => details.id === editDetailsId);

    newDetails[index] = editedDetails;

    setCustomerDetails(newDetails);
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
      <Route >
          <Route index element={<Layout />} />
          <Route path="table" element={<Table customerDetails={customerDetails}
      editDetailsId={editDetailsId}
      handleEditFormSubmit={handleEditFormSubmit}
      editFormData={editFormData}
      handleEditFormChange={handleEditFormChange}
      handleCancelClick={handleCancelClick}
      handleEditClick={handleEditClick}
      handleDeleteClick={handleDeleteClick}></Table>}></Route>
          <Route path="new" element={<New customerDetails={customerDetails}
                    handleAddFormChange={handleAddFormChange}
                    handleAddFormSubmit={handleAddFormSubmit}/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

    <p className="footer">For more information, Visit website</p>

    </div>


    
  );
};

export default App;