import React from "react";

const EditableRowBranch = ({
  editFormDataBranch,
  handleEditFormChangeBranch,
  handleCancelClickBranch,
}) => {
  return (
    <tr>
      <td>
      <input 
                type = "text"
                required="required"
                placeholder="Enter Branch"
                name = "BranchId"
                value={editFormDataBranch.BranchId}
                onChange={handleEditFormChangeBranch}
                ></input>
      </td>
      <td>
      <input 
                type = "text"
                required="required"
                placeholder="Enter Name"
                name = "Name"
                value={editFormDataBranch.Name}
                onChange={handleEditFormChangeBranch}
                ></input>
      </td>
      <td>
      <input 
                type = "text"
                required="required"
                placeholder="Enter City"
                name = "City"
                value={editFormDataBranch.City}
                onChange={handleEditFormChangeBranch}
                ></input>
      </td>
      
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClickBranch}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRowBranch;
