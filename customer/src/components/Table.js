import React from "react";
import "../App.css"
import { Fragment } from "react";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";

const Table = ({customerDetails,editDetailsId, handleEditFormSubmit, editFormData,handleEditFormChange , handleCancelClick, handleEditClick, handleDeleteClick}) => {
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
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
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

export default Table;