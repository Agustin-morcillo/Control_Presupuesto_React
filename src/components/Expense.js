import React from 'react'
import PropTypes from 'prop-types';

export default function Expense({expense,removeFromList}) {

    const handleClick = () => {
        return removeFromList(expense)
    }

    return (
        <li className="gasto">
            <p>
                <span className="expense">{expense.name}</span>
                
                <span className="gasto">$ {expense.amount}</span>
            </p>
            <button className="delete-button" onClick={handleClick}>Eliminar</button>
        </li>
        
    )
}

Expense.propTypes = {
    expense: PropTypes.object,
    removeFromList: PropTypes.func,
  };
