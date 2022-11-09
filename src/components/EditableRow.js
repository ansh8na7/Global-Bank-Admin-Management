import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
      <input 
                type = "text"
                required="required"
                placeholder="Enter Account Number"
                name = "BranchId"
                value={editFormData.BranchId}
                onChange={handleEditFormChange}
                ></input>
      </td>
      <td>
      <input 
                type = "text"
                required="required"
                placeholder="Enter Customer Number"
                name = "Name"
                value={editFormData.Name}
                onChange={handleEditFormChange}
                ></input>
      </td>
      <td>
      <input 
                type = "text"
                required="required"
                placeholder="Enter Branch Id"
                name = "City"
                value={editFormData.City}
                onChange={handleEditFormChange}
                ></input>
      </td>
      
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;