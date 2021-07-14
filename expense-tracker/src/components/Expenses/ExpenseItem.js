import React from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log('로그 출력테스트')
    }

    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount} 원</div>
            </div>
            <button onClick={clickHandler}>수정</button>
        </Card>
    )
}

export default ExpenseItem