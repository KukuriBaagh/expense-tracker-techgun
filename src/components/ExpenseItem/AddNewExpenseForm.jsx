import TotalSum from "./TotalExpense"
import './AddNewExpenseForm.css'
import React, { useState } from 'react'


const AddNewExpenseForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const [ expenseTitle, setExpenseTitle] = useState()
  const [ expensePrice, setExpensePrice ] = useState()
  const [ expenseDate, setExpenseDate ] = useState()

  const handleChange = (e) => setExpenseTitle(e.target.value)
  

  return (
    <div>
      <form onSubmit={handleSubmit} className="expense-form">
        <label htmlFor="expenseTitle">Title</label>
        <input onChange={handleChange} value={expenseTitle} type="text" name="expenseTitle" id="expenseTitle" placeholder="Expense Title" />
        <label htmlFor="expensePrice">Price</label>
        <input onChange={handleChange} value={expensePrice} type="text" name="expensePrice" id="expensePrice" placeholder="Expense Price" />
        <label htmlFor="expenseDate">Date</label>
        <input onChange={handleChange} value={expenseDate} type="text" name="expenseDate" id="expenseDate" placeholder="Expense Date" />
        <button type="submit">Add Expense</button>
      </form>
      <TotalSum  />
    </div>
  )
}

export default AddNewExpenseForm

