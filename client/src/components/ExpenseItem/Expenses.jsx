import './Expenses.css'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import ExpenseCard from '../UI/ExpenseCard'
import React from 'react'

const Expenses = (props) => {
    return (
        <ExpenseCard className="expenses">
            {
                props.item.map(expense => (<ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />))
            }
        </ExpenseCard>
    )
}


export default Expenses