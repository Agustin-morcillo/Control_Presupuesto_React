import React, { useState } from "react"
import PropTypes from "prop-types"

import InputField from "./InputField"
import Error from "./Error"

export default function Home({ setInitialBudget, setCurrentBudget, setShowHome,}) {
  const [budgetValue, setBudgetValue] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { value } = e.target
    if (!value) {
      return setBudgetValue(e.target.value)
    }
    return setBudgetValue(parseInt(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let validationError = ""

    if (budgetValue === "") {
      validationError = "Debes ingresar un presupuesto"
    } else if (budgetValue < 1) {
      validationError = "El presupuesto debe ser mayor a 0"
    }

    if (validationError) {
      return setError(validationError)
    } else {
      setError("")
    }

    setInitialBudget(budgetValue)
    setCurrentBudget(budgetValue)

    setShowHome(false)
    return
  }

  return (
    <>
      <h2>Ingresa tu presupuesto</h2>

      {error && <Error message={error} />}

      <form action="" onSubmit={handleSubmit}>
        <InputField
          type="number"
          name="budget"
          className="u-full-width"
          placeholder="Ej: 750"
          onChange={handleChange}
          value={budgetValue}
        />

        <button type="submit" className="button-primary u-full-width">
          Definir presupuesto
        </button>
      </form>
    </>
  )
}

Home.propTypes = {
  setInitialBudget: PropTypes.func,
  setCurrentBudget: PropTypes.func,
  setShowHome: PropTypes.func,
}
