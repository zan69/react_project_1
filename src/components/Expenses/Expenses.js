import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({expenses}) {
    const [filter, setFilter] = useState('');

    const filterChangeHandler = (change) => {
        setFilter(change.target.value);
    }

    const filteredExpenses = expenses.filter((expense) => {return expense.date.getFullYear() === parseInt(filter)})

    return <div>
    <Card className="expenses">
        <ExpensesFilter selected={filter} onFilterChange={filterChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
    </Card>
    </div>
}

export default Expenses