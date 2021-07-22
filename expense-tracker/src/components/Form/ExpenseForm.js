import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState('')
    // const [enteredDate, setEnteredDate] = useState('')
    const [userInput, setUserInput] = useState({
        setEnteredTitle: '',
        setEnteredAmount: '',
        setEnteredDate: ''
    })

    const titleChangeHandler = event => {
        // console.log(event.target.value)
        // setEnteredTitle(event.target.value)
        setUserInput({
            ...userInput,
            setEnteredTitle: event.target.value
        })
    }

    const amountChangeHandler = event => {
        // setEnteredAmount(event.target.value)
        setUserInput({
            ...userInput,
            setEnteredAmount: event.target.value
        })
    }

    const dateChangeHandler = event => {
        // setEnteredDate(event.target.value)
        setUserInput({
            ...userInput,
            setEnteredDate: event.target.value
        })
    }

    return(
        <form>
            <div className='new-expense__constrols'>
                <div className='new-expense__control'>
                    {/* <label>지출내용</label> */}
                    <input type='text' placeholder='지출내용' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    {/* <label>비용</label> */}
                    <input type='number' min='0' step='0' placeholder='비용' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    {/* <label>날짜</label> */}
                    <input type='date' min='2019-01-01' max='2025-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>지출추가</button>
            </div>
        </form>
    )
}

export default ExpenseForm