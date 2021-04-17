import React,{useState} from 'react'
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid'
import InputField from './InputField';
import Error from "./Error"

export default function AddExpense({addToList,currentBudget}) {

    //States
    const [expenseName, setexpenseName] = useState("")
    const [expenseValue, setExpenseValue] = useState("")
    const [errors, setErrors] = useState({})

    //Input change function
    const handleChange = (e) => {
        const {value,name} = e.target
        
        if(name === "name") {
            return setexpenseName(value)
        }
        return setExpenseValue(parseInt(value))
    }

    //Form submit function
    const handleSubmit = (e) => {
        e.preventDefault()

        let validationError = {};
        
        //Validating inputs
        if(!expenseName) {
            validationError.name = "Debes ingresar un nombre"
        }

        if(!expenseValue) {
            validationError.value = "Debes ingresar un valor"
        } else if(expenseValue < 1) {
            validationError.value = "El valor debe ser mayor a 0"
        }

        //Setting input error state
        if(Object.keys(validationError).length > 0) {
             return setErrors(validationError)
        } else {
            setErrors({})
        }

        //Creating the new expense
        const newExpense = {
            name:expenseName,
            amount:expenseValue,
            id: nanoid()
        }

        //Adding the new expense to the list
        addToList(newExpense)

        //Resetting the form
        setExpenseValue("")
        setexpenseName("")
        return
    }
   
    return (
        <div>
            <h2>Agrega tus gastos aquí</h2>
            <form action=""
                onSubmit={handleSubmit}
            >
                <InputField 
                    divClass="campo"
                    label="Nombre del gasto"
                    type="text"
                    name="name"
                    className="u-full-width"
                    placeholder="Ej: Transporte"
                    onChange={handleChange}
                    value={expenseName}
                    error={errors.name}
                />

                 <InputField 
                    divClass="campo"
                    label="Monto del gasto"
                    type="number"
                    name="amount"
                    className="u-full-width"
                    placeholder="Ej: 500"
                    onChange={handleChange}
                    value={expenseValue || ""}
                    error={errors.value}
                />

                <button
                    type="submit"
                    className="button-primary u-full-width"
                >Agregar gasto</button>

                {
                    currentBudget < 1 && <Error message="Se agotó tu presupuesto" />
                }
            </form>
            
        </div>
    )
}

AddExpense.propTypes = {
    addToList: PropTypes.func,
    currentBudget: PropTypes.number,
  };
