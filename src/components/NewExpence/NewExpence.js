import React from "react";
import './NewExpence.css';
import ExpenceForm  from "./ExpenceForm";
const NewExpence = (props) =>{
    const saveExpenceData = (enteredExpenceData) =>{
      //  console.log(enteredExpenceData);
        props.addExpenceHandler(enteredExpenceData);
    }
    return <div className="new-expense">
        <ExpenceForm onSaveExpence={saveExpenceData}></ExpenceForm>
    </div>;
}

export default NewExpence;