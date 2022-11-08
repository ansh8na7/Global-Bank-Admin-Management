import React from "react";
import "../App.css"

const ReadOnlyRow = ({ details, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
            <td>{details.AccountNo}</td>
            <td>{details.CustomerNo}</td>
            <td>{details.BranchId}</td>
            <td>{details.Balance}</td>
            <td>{details.OpeningDate}</td>
            <td>
            <button
                type="button"
                onClick={(event) => handleEditClick(event, details)}
                >
                Edit
                </button>
        <button type="button" onClick={() => handleDeleteClick(details.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;