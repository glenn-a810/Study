import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    // const [title, setTitle] = useState(props.title)
    // console.log('ExpenseItem evaluated by React')

    // let title = props.title

    // const clickHandler = () => {
    //     setTitle ('편집 상태')
    //     console.log(title)
    // }

    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                {/* <h2>{title}</h2> */}
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount} 원</div>
            </div>
            {/* <button onClick={clickHandler}>수정</button> */}
        </Card>
    )
}

export default ExpenseItem