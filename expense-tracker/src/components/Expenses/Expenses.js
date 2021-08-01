import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css'

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = selectedYear => {
        // console.log('Expenses.js')
        // console.log(selectdYear)
        setFilteredYear(selectedYear)
    }

    const selectedYearFilter = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return(
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
                {selectedYearFilter.map(expense => (
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date} 
                    />
                ))}
                {/* <ExpenseItem 
                    title={props.expenses[0].title} 
                    amount={props.expenses[0].amount} 
                    date={props.expenses[0].date} 
                />
                <ExpenseItem 
                    title={props.expenses[1].title} 
                    amount={props.expenses[1].amount} 
                    date={props.expenses[1].date}  
                />
                <ExpenseItem 
                    title={props.expenses[2].title} 
                    amount={props.expenses[2].amount} 
                    date={props.expenses[2].date}  
                />
                <ExpenseItem 
                    title={props.expenses[3].title} 
                    amount={props.expenses[3].amount} 
                    date={props.expenses[3].date}  
                /> */}
            </Card>
        </div>
    )
}

export default Expenses