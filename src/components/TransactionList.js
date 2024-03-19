import React, {useEffect, useState} from 'react'
import Transaction from './Transaction'

// Transaction List
const TransactionList = () => {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        getTransactions()
    }, [])

    const getTransactions = async() => {
        fetch("https://infra.devskills.app/api/accounting/transactions")
                .then(res => res.json())
                .then(data => setTransactions(data))
            }
            
        return (
    <div className='h-100 overflow-hidden '>
        <h3>Transaction List</h3>
        <div>
           {transactions.map((transaction, index) => {
            return(
             <Transaction key={index} transaction={transaction} />
            )
            
           } ) }
        </div>
    </div>
  )
}

export default TransactionList