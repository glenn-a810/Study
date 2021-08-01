import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/Form/NewExpense'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: '자동차 보험',
    amount: 294670,
    date: new Date(2019, 6, 6)
  },
  {
    id: 'e2',
    title: '냥놈들 사료',
    amount: 26000,
    date: new Date(2021, 5, 21)
  },
  {
    id: 'e3',
    title: '오드 면역억제제',
    amount: 180000,
    date: new Date(2020, 5, 16)
  },
  {
    id: 'e4',
    title: '쿠팡 생필품',
    amount: 36700,
    date: new Date(2022, 6, 4)
  }
]

const App = () => {
  // regular JavaScript, cumbersome
  // const para = document.createElement('p')
  // para.textContent = 'This is also visible'
  // document.getElementById('root').append(para)
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler  = expense => {
    // console.log('In App.js')
    // console.log(expense)
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, 'Expense Tracker WebApp'),
  //   React.createElement(Expenses, {expenses: expenses})
  // )

  return(
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App