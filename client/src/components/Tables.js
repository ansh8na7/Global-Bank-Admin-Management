import React, { useEffect } from "react";
import "../App.css"
import { Fragment } from "react";
import EditableRows from "./EditableRows";
import ReadOnlyRows from "./ReadOnlyRows";
import isLoggedIn from "../auth/loginAuth";
import { useNavigate } from "react-router-dom";

const MediaTrackCapabilities = ({customerDetails,editDetailsId, handleEditFormSubmit, editFormData,handleEditFormChange , handleCancelClick, handleEditClick, handleDeleteClick}) => {
  
  const navigate = useNavigate();
  
  useEffect(() => {
      
    if(!isLoggedIn()){
        navigate("/");
    }
})

  
  return (
    <div className="app-container"> 
      <h1 class="c">Customer Details</h1>
      <form onSubmit={handleEditFormSubmit}>
        <table width="70%" height="170px" 
        border cellspacing="0">
          <thead>
            <tr>
            <th>Account No</th>
            <th>Customer No</th>
            <th>Branch Id</th>
            <th>Opening Balance</th>
            <th>Opening Date</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customerDetails.map((details) => (
              <Fragment>
                {editDetailsId === details.id ? (
                  <EditableRows
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRows
                    details={details}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  
  );
};

export default MediaTrackCapabilities;