import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './NewExpense.scss';

function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
 
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense-control">
                    <label>Amount</label>
                    <input type="number" min="1" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense-control">
                    <label>Date</label>
                    <input type="date" min="2000-01-1" max="2021-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
                <div className="new-expense-actions">
                    <CustomButton type='button' onClick={props.onChange}>Cancel</CustomButton>
                    <CustomButton type='submit'>Add Expense</CustomButton>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;

