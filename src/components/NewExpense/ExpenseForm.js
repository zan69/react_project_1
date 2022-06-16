import "./ExpenseForm.css"
import {useState} from "react";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = ({target}) => {
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: target.value}
        // });

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: target.value
        // })
        setEnteredTitle(target.value);
    }

    const amountChangeHandler = ({target}) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: target.value
        // })
        setEnteredAmount(target.value);
    }

    const dateChangeHandler = ({target}) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: target.value
        // })
        setEnteredDate(target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

        props.onSaveExpenseData(expenseData);
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.closeForm}>Close</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;