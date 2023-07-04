import './ExpenseCard.css'
import React from 'react'

const ExpenseCard = (props) => {
  const classes = 'expense-container ' + props.className

  return <div className={classes}>{props.children}</div>
}

export default ExpenseCard
