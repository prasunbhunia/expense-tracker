import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Expense from '../component/Expense/Expense';
import NewExpense from '../component/NewExpense/NewExpense';

import './Dashboard.scss';

const DUMMY_EXPENSE = [
    {
      id: '1',
      title: 'Toilet Paper',
      amount: 300,
      date: new Date(2020, 7, 14),
    },
    { 
        id: '2', 
        title: 'New TV', 
        amount: 23000, 
        date: new Date(2021, 2, 12) },
    {
      id: '3',
      title: 'Car Insurance',
      amount: 9000,
      date: new Date(2021, 2, 28),
    },
    {
      id: '4',
      title: 'New Desk (Wooden)',
      amount: 2500,
      date: new Date(2021, 5, 12),
    },
];
function Dashboard(){
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    const addExpenesHandler = (expense) => {
        console.log(expense);
        setExpenses((prevExpense) => {
            return [expense, ...expenses];
        });
    }

    return(
        <div className='dashboard'>
            <div className='profile'>
                <div className='logo-container'>
                    <Logo className='logo' />
                </div>    
            </div>
            <div className='dashboard-item'>
                <div className='heading'>
                    <h2>Dashboard</h2>
                    <h4>Expense Tracker</h4>
                </div>
                <NewExpense onAddExpense={addExpenesHandler} />
                <Expense item={expenses} />
            </div> 
            <div className='details'></div> 
        </div>
    );
}

export default Dashboard;