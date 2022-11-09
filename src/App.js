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
   BranchId: '',
   Name: '',
   City: ''
  });

  const [editFormData, setEditFormData] = useState({
    BranchId: '',
    Name: '',
    City: ''
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
      BranchId: addFormData.BranchId,
    Name: addFormData.Name,
    City: text,
     };

    

    const newDetails = [...customerDetails, newCustomerDetails];
    setCustomerDetails(newDetails);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedDetails = {
      id: editDetailsId,
      BranchId: editFormData.BranchId,
      Name: editFormData.Name,
      City: editFormData.City,
      
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
      BranchId: details.BranchId,
    Name: details.Name,
    City: details.City,
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