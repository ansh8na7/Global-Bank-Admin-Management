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
                name = "AccountNo"
                value={editFormData.AccountNo}
                onChange={handleEditFormChange}
                ></input>
      </td>
      <td>
      <input 
                type = "text"
                required="required"
                placeholder="Enter Customer Number"
                name = "CustomerNo"
                value={editFormData.CustomerNo}
                onChange={handleEditFormChange}
                ></input>
      </td>
      <td>
      <input 
                type = "text"
                required="required"
                placeholder="Enter Branch Id"
                name = "BranchId"
                value={editFormData.BranchId}
                onChange={handleEditFormChange}
                ></input>
      </td>
      <td>
      <input 
                type = "number"
                required="required"
                placeholder="Enter Opening Balance"
                name = "Balance"
                value={editFormData.Balance}
                onChange={handleEditFormChange}
                ></input>
      </td>
      <td>
            <input 
                type = "text"
                required="required"
                placeholder="Enter Account Opening Date"
                name = "OpeningDate"
                value={editFormData.OpeningDate}
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