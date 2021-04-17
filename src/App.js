import React,{useState} from 'react'
import Home from "./components/Home";
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import BudgetAmount from './components/BudgetAmount';

function App() {

  //General States
  const [initialBudget, setInitialBudget] = useState(0);
  const [currentBudget, setCurrentBudget] = useState(0);
  const [showHome, setShowHome] = useState(true);
  const [expenseList, setExpenseList] = useState([]);

  //Add new expense to the list
  const addToList = (expense) => {
    setExpenseList([
      ...expenseList,
      expense
    ])
    return setCurrentBudget(currentBudget-expense.amount)
  }

  //remove expense from the list
  const removeFromList = (expense) => {
    const updatedList = expenseList.filter((expen)=>expen.id !== expense.id)
    setExpenseList(updatedList)

    return setCurrentBudget(currentBudget+expense.amount)
  }

  return (
    <>
      <div className="container">
          <div className="main-container">
              <h1>Gasto Semanal</h1>

              <div className="contenido-principal contenido">
                  {
                    showHome
                    ?
                    <Home 
                      setInitialBudget={setInitialBudget}
                      setCurrentBudget={setCurrentBudget}
                      setShowHome={setShowHome}
                    />
                    :
                    <div className="row">
                        <div className="one-half column">
                          <AddExpense
                            addToList={addToList}
                            currentBudget={currentBudget}
                          />
                        </div>

                        <div className="one-half column">
                            <ExpenseList
                              expenseList={expenseList}
                              removeFromList={removeFromList}
                            />

                            <BudgetAmount 
                              initialBudget={initialBudget}
                              currentBudget={currentBudget}
                            />
                        </div>
                    </div>
                  }
              </div>
          </div>
      </div>
    </>
  );
}

export default App;
