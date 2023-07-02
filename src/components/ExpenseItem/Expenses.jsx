import './Expenses.css'
import data from '../../formObjects'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

const Expenses = () => {
    return (
        <>
            <ExpenseItem title={data[0].name} price={data[0].price} date={data[0].date} />
            <ExpenseItem title={data[1].name} price={data[1].price} date={data[1].date} />
            <ExpenseItem title={data[2].name} price={data[2].price} date={data[2].date} />
            <ExpenseItem title={data[3].name} price={data[3].price} date={data[3].date} />
        </>
    )
}
export default Expenses
