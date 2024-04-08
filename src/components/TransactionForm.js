import React, {useRef, useState} from 'react'

 // Transaction Form
const TransactionForm = () => {

    const  handleSubmit = async (e) => {
        e.preventDefault()
           const accountId = e.target[0].value
           const amount = e.target[1].value
           const url = "https://infra.devskills.app/api/accounting/transaction"
           const dataObj = {
             "account_id": accountId,
             "amount": amount
           }
           const requestOptions = {
             method: "POST",
             headers: {
              "Content-Type":"application/json"
             },
             body: JSON.stringify(dataObj)
           }
           const response = await fetch(url, requestOptions)
           const data = await response.json()
           e.target.reset()
          // console.log("logged")
    }

  return (
    <div>
        <h3 className='text-center '>New Transaction</h3>
        <form onSubmit={handleSubmit} className='w-[250px] flex flex-col text-black gap-2 items-center '> 
            <input  className='border rounded p-1' placeholder='Account ID' data-type="account-id"/>
            <input  className='border rounded p-1' placeholder='Amount' data-type="amount"/>
            <input className='bg-green-500 text-white rounded p-1' data-type="transaction-submit" type="submit"/>
            {/* <button type='submit'>Submit</button> */}
        </form>

    </div>
  )
}

export default TransactionForm