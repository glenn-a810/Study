import Expenses from './components/Expenses'

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
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App