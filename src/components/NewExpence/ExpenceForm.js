import React, {useState} from "react";
import './ExpenceForm.css';
const ExpenceForm = (props) =>{
     const [enteredTitle, setEnteredTitle]       = useState('');
    const [enteredAmount, setEnteredAmount]     = useState(0.0);
    const [enteredDate, setEnteredDate]         = useState(2021-1-1);
 

// const [userInput, setUserInput] = useState({
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate:'',
// })

    const titleChangeHandler =event =>{
       setEnteredTitle(event.target.value);
    //    setUserInput({
    //     ...userInput, enteredTitle : event.target.value
    //      })
    }

    const amountChangeHandler =event =>{
         setEnteredAmount(event.target.value);
    //    setUserInput({
    //     ...userInput, enteredAmount : event.target.value
    //      })
    }

    const dateChangeHandler =event =>{
         setEnteredDate(event.target.value);
    //  setUserInput({
    //     ...userInput, enteredDate : event.target.value
    //      })
    }

   

    const submitHandler = (event) =>{
        event.preventDefault()
        
        const expenceData = {
            id:Math.random().toString(),
            title: enteredTitle,
            date: new Date(enteredDate),
            amount:enteredAmount
        }
        props.onSaveExpence(expenceData);
        
        setEnteredTitle('');
        setEnteredAmount(0.0);
        setEnteredDate('');
    }
return (
    <form onSubmit={submitHandler} method="post">
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount}  min="0.1" step="0.1" onChange={amountChangeHandler} />
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2021-1-1" max="2023-12-31" onChange={dateChangeHandler} />
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Action</button>
            </div>
        </div>
    </form>
);
}

export default ExpenceForm;