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
                placeholder="Enter Branch"
                name = "BranchId"
                value={editFormData.BranchId}
                onChange={handleEditFormChange}
                ></input>
      </td>
      <td>
      <input 
                type = "text"
                required="required"
                placeholder="Enter Name"
                name = "Name"
                value={editFormData.Name}
                onChange={handleEditFormChange}
                ></input>
      </td>
      <td>
      <input 
                type = "text"
                required="required"
                placeholder="Enter City"
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
