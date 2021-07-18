import React from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    return(
        <form>
            <div className='new-expense__constrols'>
                <div className='new-expense__control'>
                    <label>지출내용</label>
                    <input type='text' />
                </div>
                <div className='new-expense__control'>
                    <label>비용</label>
                    <input type='number' min='0' step='0' />
                </div>
                <div className='new-expense__control'>
                    <label>날짜</label>
                    <input type='date' min='2019-01-01' max='2025-12-31' />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>지출추가</button>
            </div>
        </form>
    )
}

export default ExpenseForm