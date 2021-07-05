function App() {
  // regular JavaScript, cumbersome
  const para = document.createElement('p')
  para.textContent = 'This is also visible'
  document.getElementById('root').append(para)

  return(
    <div>
      <h2>Expense Tracker WebApp</h2>
      <p>This is also visible</p>
    </div>
  )
}

export default App