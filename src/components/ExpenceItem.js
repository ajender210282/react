import React, {useState} from "react";
import "./ExpenceItem.css";
import Card from "./Card";
import ExpenceDate from "./ExpenceDate";
function ExpenceItem(props){
   /* const expenseDate = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = expenseDate.getDay();
    const month = expenseDate.getMonth();
    const year  = expenseDate.getFullYear();
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;*/
    const [title, setTitle] = useState(props.title);
    const clickHandler = () =>{
        console.log("Click heandler!!!!!!!")
        setTitle("Clicked");
    }

    return (
        
        <Card className="expense-item">
            <ExpenceDate date={props.date}></ExpenceDate>
            <div className="expense-item_description">
                <h2>{title}</h2>
                <div className="expense-item_price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}> Change Title</button>
        </Card>
    );
    
}
export default ExpenceItem;  