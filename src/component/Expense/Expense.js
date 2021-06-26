import React, {useState} from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesChart from '../Chart/ExpenseChart';

import './Expense.scss';

function Expense(props){
    const [filteredYear, setFilteredYear] = useState('2021');
      
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    const filteredExpense = props.item.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return(
        <div>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <div className='expense'>
                <ExpensesChart expenses={filteredExpense} />
                {filteredExpense.length === 0 ? <p>No Result Found !!</p> : filteredExpense.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                ))}
            </div>
        </div>   
    );
}

export default Expense;