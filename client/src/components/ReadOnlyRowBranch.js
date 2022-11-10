import React from "react";
import "../App.css"

const ReadOnlyRowBranch = ({ details, handleEditClickBranch, handleDeleteClickBranch }) => {
  return (
    <tr>
            <td>{details.branchId}</td>
            <td>{details.branchName}</td>
            <td>{details.branchCity}</td>
           
            <td>
            <button
                type="button"
                onClick={(event) => handleEditClickBranch(event, details)}
                >
                Edit
                </button>
        <button type="button" onClick={() => handleDeleteClickBranch(details.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRowBranch;