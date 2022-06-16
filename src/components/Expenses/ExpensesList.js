import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = ({expenses}) => {

    return <ul className="expenses-list">
        {expenses.length === 0 ? (
                <h2 className='expenses-list__fallback'>No expenses found.</h2>
            ) : (
                expenses.map((expense, i) => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        key={i}
                    />
                ))
            )
        }
    </ul>
}

export default ExpensesList