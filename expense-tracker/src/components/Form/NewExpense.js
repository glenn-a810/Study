import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = props => {
    const [editing, setEditing] = useState(false)

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData)
        props.onAddExpense(expenseData)
        setEditing(false)
    }

    const startEditingHandler = () => {
        setEditing(true)
    }

    const stopEditingHandler = () => {
        setEditing(false)
    }

    return(
        <div className='new-expense'>
            {!editing && <button onClick={startEditingHandler}>할 일 추가하기</button>}
            {editing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    )
}

export default NewExpense