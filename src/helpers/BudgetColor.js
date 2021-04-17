const budgetColor = (budget, remainingBudget)=> {
    let clase;

    if((budget*0.25) >= remainingBudget) {
        clase = "alert alert-danger"
    } else if((budget*0.50) >= remainingBudget ) {
        clase = "alert alert-warning"
    } else {
        clase = "alert alert-success"
    }
    return clase
}

export default budgetColor
