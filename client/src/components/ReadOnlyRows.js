import React from "react";
import "../App.css"

const ReadOnlyRows = ({ details, handleEditClick, handleDeleteClick }) => {
  console.log(details)

  return (
    <tr>
            <td>{details.AccountNo}</td>
            <td>{details.customerNumber}</td>
            <td>{details.branchId}</td>
            <td>{details.balance}</td>
            <td>{details.openingDate}</td>
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

export default ReadOnlyRows;