import ExpenseItem from "./components/ExpenseItem"

function App() {
  // regular JavaScript, cumbersome
  // const para = document.createElement('p')
  // para.textContent = 'This is also visible'
  // document.getElementById('root').append(para)

  return(
    <div>
      <h2>Expense Tracker WebApp</h2>
      <ExpenseItem />
    </div>
  )
}

export default App