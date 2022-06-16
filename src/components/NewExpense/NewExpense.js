import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"
import {useState} from "react";

const NewExpense = (props) => {

    const [formState, setFormState] = useState('closed')

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        setFormState('closed')
        props.onAddExpense(expenseData)
    }

    const closeForm = () => {
        setFormState('closed')
    }

    const openForm = () =>{
        setFormState('open')
    }

    const formClosed = <button onClick={openForm}>Add New Expense</button>
    const formOpen = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeForm={closeForm}/>

    return <div className="new-expense">
        {formState === 'closed' ? formClosed : formOpen}
    </div>
};

export default NewExpense;