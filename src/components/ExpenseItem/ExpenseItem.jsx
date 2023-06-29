import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const year = props.date.getFullYear()

    return (
        <>
            <div className="expense-details">
                <h2 className='expense-title'>{ props.title }</h2>
                <h4 className='expense-price'>${ props.price }</h4>
                <h6 className='expense-date'>
                    <p>{ day }</p>
                    <p>{ month }</p>
                    <p>{ year }</p>
                </h6>
            </div>
        </>
    )
}


export default ExpenseItem