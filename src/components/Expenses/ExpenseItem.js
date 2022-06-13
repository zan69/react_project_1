import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from 'react'

function ExpenseItem(props) {
    const {amount, date} = props;
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated')
        console.log('clicked')
    }

    return <Card className="expense-item">
        <ExpenseDate date={date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
    </Card>;
}

export default ExpenseItem