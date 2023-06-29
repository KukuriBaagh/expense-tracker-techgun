// import formData from './formObjects.json'
import ExpenseItem from './components/ExpenseItem/ExpenseItem'

const App = () => {

  let title = "Phone Recharge"
  let price = 200
  let date = new Date(2023, 11, 1)
  
  return (
    <>
      <ExpenseItem title={title} price={price} date={date} />
      <ExpenseItem title={title} price={price} date={date} />
      <ExpenseItem title={title} price={price} date={date} />
      <ExpenseItem title={title} price={price} date={date} />
    </>
  )
}

export default App
