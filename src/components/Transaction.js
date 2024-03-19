import React from 'react'

// Transaction Component
const Transaction = ({transaction}) => {
  return (
    <div className='w-100 h-[100px] border flex flex-col justify-center rounded p-3 my-2 shadow'> 
      <p>Transaction ID: <span data-type='transaction' className='font-bold'>{transaction.transaction_id}</span> </p>
      <p>Transferred <span data-amount='transaction-amount' className='font-bold'>{transaction.amount}</span> to <span data-account-id='transaction-account-id' className='font-bold'> {transaction.account_id}</span></p>
      {/* <p>Balance <span className='font-bold'>{transaction.amount}</span></p> */}
    </div>
  )
}

export default Transaction