import React, { useEffect } from "react";
import "../App.css"
import { Fragment } from "react";
import EditableRowBranch from "./EditableRowBranch";
import ReadOnlyRowBranch from "./ReadOnlyRowBranch";
import { useNavigate } from "react-router-dom";
import isLoggedIn from "../auth/loginAuth";

const TableBranch = ({customerDetailsBranch,editDetailsIdBranch, handleEditFormSubmitBranch, editFormDataBranch,handleEditFormChangeBranch , handleCancelClickBranch, handleEditClickBranch, handleDeleteClickBranch}) => {
  
  const navigate = useNavigate()

    useEffect(() => {
      
        if(!isLoggedIn()){
            navigate("/");
        }
    })
    


  
  return (
    <div className="app-container"> 
      <h1 class="c">Branch Details</h1>
      <form onSubmit={handleEditFormSubmitBranch}>
        <table width="70%" height="170px" 
        border cellspacing="0">
          <thead>
            <tr>
            <th>BranchId</th>
            <th>Name</th>
            <th>City</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customerDetailsBranch.map((details) => (
              <Fragment>
                {editDetailsIdBranch === details.id ? (
                  <EditableRowBranch
                    editFormDataBranch={editFormDataBranch}
                    handleEditFormChangeBranch={handleEditFormChangeBranch}
                    handleCancelClickBranch={handleCancelClickBranch}
                  />
                ) : (
                  <ReadOnlyRowBranch
                    details={details}
                    handleEditClickBranch={handleEditClickBranch}
                    handleDeleteClickBranch={handleDeleteClickBranch}
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

export default TableBranch;
