import './ExpenseCard.css'

const ExpenseCard = (props) => {
  const classes = 'expense-container ' + props.className

  return <div className={classes}>{props.children}</div>
}

export default ExpenseCard
