import React from 'react'
import PropTypes from 'prop-types';
import Expense from "./Expense"


export default function ExpenseList({expenseList,removeFromList}) {
    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {
                expenseList.map((expense)=> {
                    return <Expense 
                        key={expense.id}
                        expense={expense}
                        removeFromList={removeFromList}
                    />
                })
            }
        </div>
    )
}

ExpenseList.propTypes = {
    expenseList: PropTypes.array,
    removeFromList: PropTypes.func,
  };

