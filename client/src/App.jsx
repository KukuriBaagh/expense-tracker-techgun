import Expenses from "./components/ExpenseItem/Expenses"
import { useEffect, useState } from "react"
import NewExpense from "./components/ExpenseItem/NewExpenses/NewExpense"


const App = () => {
  const [ expenses, setExpenses ] = useState([])

  // _________        Get Data From Server        _______________ //
  useEffect(() => {
    async (e) => {
      e.preventdefault();
      let result = await fetch('http://localhost:5001/postexpense' , {
        method: 'post',
        body: JSON.stringify({ expenses }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      result = await result.json();
      console.warn(result);
      if (result) {
        alert('New Expense saved successfully');
        setExpenses();
        console.log(result);
      }
    }
  })
// ____________           FETCH API ENDS HERE !           _______________ //

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses]
    setExpenses(updatedExpense)
  }

  return (
    <>
      <NewExpense onAddExpense={ addExpenseHandler } />
      <Expenses item={expenses} />
    </>
  )
}

export default App
