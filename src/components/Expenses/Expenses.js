import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";

function Expenses(props) {
    const {expenses} = props
    return <Card className="expenses">
        {expenses.map((expense, i) => (
            <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                key={i}
            />
        ))}
    </Card>

}

export default Expenses