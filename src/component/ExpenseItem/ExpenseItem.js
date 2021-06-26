// import React, { useState } from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

import './ExpenseItem.scss';

function ExpenseItem(props){
    // const [title, setTitle]=useState(props.title);
    // const clickHandler = () => {
    //     setTitle('update');
    // }
    //<button onClick={clickHandler} >Update</button>
    return(
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>₹{props.amount}</div>
            </div>
        </div>
        
    );
}


export default ExpenseItem;