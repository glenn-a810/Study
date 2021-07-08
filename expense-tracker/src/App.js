import ExpenseItem from "./components/ExpenseItem"

function App() {
  // regular JavaScript, cumbersome
  // const para = document.createElement('p')
  // para.textContent = 'This is also visible'
  // document.getElementById('root').append(para)
  const expenses = [
    {
      id: 'e1',
      title: '자동차 보험',
      amount: 294670,
      date: new Date(2021, 6, 6)
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
      date: new Date(2021, 5, 16)
    },
    {
      id: 'e4',
      title: '쿠팡 생필품',
      amount: 36700,
      date: new Date(2021, 6, 4)
    }
  ]

  return(
    <div>
      <h2>Expense Tracker WebApp</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}  />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}  />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}  />
    </div>
  )
}

export default App