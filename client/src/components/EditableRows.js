import React from "react";

const EditableRows = ({
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
      <select type="text" id="BranchId" name="BranchId"  value={editFormData.BranchId}
                onChange={handleEditFormChange}>
<option value="b001">b001</option>
<option value="b002">b002</option>
<option value="b003">b003</option>
<option value="b004">b004</option>
<option value="b005">b005</option>
</select>
      
      </td>
      <td>
      <input 
                type = "number"
                required="required"
                placeholder="Enter Opening Balance"
                name = "Balance"
                min="5000"
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

export default EditableRows;