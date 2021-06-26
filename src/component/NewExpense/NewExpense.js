import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import CustomButton from '../CustomButton/CustomButton';

import './NewExpense.scss';

function NewExpense(props){
    const [editing, setEditing] = useState(false);
    const saveExpenseDataHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random.toString()
        }
        props.onAddExpense(expenseData);
        setEditing(false);
    };
    const startEditing = () => {
        setEditing(true);
    }
    const stopEditing = () => {
        setEditing(false);
    }
    return(
        <div className='new-expense'>
            {!editing && <CustomButton onClick={startEditing}>Add Expense</CustomButton>}
            {editing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onChange={stopEditing} />}
        </div>
    );
}

export default NewExpense;