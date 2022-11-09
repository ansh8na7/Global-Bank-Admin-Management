import React from "react";
import "../App.css"
import { Fragment } from "react";
import EditableRows from "./EditableRows";
import ReadOnlyRows from "./ReadOnlyRows";

const MediaTrackCapabilities = ({customerDetails,editDetailsId, handleEditFormSubmit, editFormData,handleEditFormChange , handleCancelClick, handleEditClick, handleDeleteClick}) => {
  return (
    <div className="app-container"> 
      <h1 class="c">Customer Details</h1>
      <form onSubmit={handleEditFormSubmit}>
        <table width="70%" height="170px" 
        border cellspacing="0">
          <thead>
            <tr>
            <th>AccountNo</th>
            <th>CustomerNo</th>
            <th>BranchId</th>
            <th>Balance</th>
            <th>OpeningDate</th>
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