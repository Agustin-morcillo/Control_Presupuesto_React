import React from 'react'
import PropTypes from 'prop-types';
import budgetColor from "../helpers/BudgetColor"

export default function BudgetAmount({initialBudget,currentBudget}) {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: $ {initialBudget}
            </div>

            <div className={budgetColor(initialBudget,currentBudget)}>
                Restante: $ {currentBudget}
            </div>
        </>
    )
}

BudgetAmount.propTypes = {
    initialBudget: PropTypes.number,
    currentBudget: PropTypes.number,
  };
