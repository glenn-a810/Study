import './ExpenseItem.css'

function ExpenseItem(props) {
    const expenseDate = new Date(2021, 6, 6)
    const expenseTitle = '자동차 보험'
    const expenseAmount = 294670

    return(
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount} 원</div>
            </div>
        </div>
    )
}

export default ExpenseItem