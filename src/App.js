 import React, {useState} from 'react';
import './App.css';
 
import Expences from './components/Expences';
import NewExpence from './components/NewExpence/NewExpence';
function App() {
   
   const [expenses, setExpences] = useState([]);
  
  
const setExepenceArray = (obj) =>{
  
  setExpences(current => [...current, obj]);
 
 
}
console.log(expenses);
  return (
    <div>
      <NewExpence addExpenceHandler= {setExepenceArray}></NewExpence>
     <Expences items={expenses}></Expences> 
    </div>
  );
}

export default App;
