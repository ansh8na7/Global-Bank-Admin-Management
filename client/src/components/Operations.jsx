import React from 'react'

const Operations = () => {

    const redirectCustomerDetails = (e)=>{
        console.log(e.target.name)
    }

    const redirectBranchDetails = (e)=>{
        console.log(e.target.name)
    }

    const redirectAddCustomer = (e)=>{
        console.log(e.target.name)
    }

    const redirectAddBranch = (e)=>{
        console.log(e.target.name)
    }

    return (
        <div className='operations'>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Global bank admin operations</h1>
                </div>
            </div>
            <div className="operation-buttons">
                <button type="button" className="btn btn-primary operations-btn" name="customerDetails" onClick={redirectCustomerDetails}>Customers details</button>
                <button type="button" className="btn btn-primary operations-btn" name="BranchDetails" onClick={redirectBranchDetails}>Branch Details</button>
                <button type="button" className="btn btn-primary operations-btn" name='addCustomer' onClick={redirectAddCustomer}>Add Customer </button>
                <button type="button" className="btn btn-primary operations-btn" name="addBranch" onClick={redirectAddBranch}>Add  Branch</button>
            </div>
        </div>
    )
}

export default Operations;