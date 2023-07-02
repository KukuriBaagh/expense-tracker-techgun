import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const year = props.date.getFullYear()

    return (
        <>
            <div className="expense-details">
                <p>{1}</p>
                <h6 className='expense-date'>
                    <div>{ day }</div>
                    <div>{ month }</div>
                    <div>{ year }</div>
                </h6>
                <h2 className='expense-title'>{ props.title }</h2>
                <h4 className='expense-price'>${ props.price }</h4>
            </div>
        </>
    )
}


export default ExpenseItem