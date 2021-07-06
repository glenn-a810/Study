import './ExpenseItem.css'

function ExpenseItem() {
    return(
        <div className='expense-item'>
            <div>2021년 07월 06일</div>
            <div className='expense-item__description'>
                <h2>자동차 보험</h2>
                <div className='expense-item__price'>294,670 원</div>
            </div>
        </div>
    )
}

export default ExpenseItem