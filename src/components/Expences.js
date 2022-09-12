import "./Expences.css"
import ExpenceItem from "./ExpenceItem";
import Card from "./Card";
function Expences(props){

    const expenses = props.items;
   
    return(
        <Card className="expences">
          {
            expenses[0]?(
              expenses?.map((item, index)=>{
                return (
                <ExpenceItem key={index} title={item.title} amount={item.amount} date={item.date} ></ExpenceItem>
                )
              })
            ):''
            
          }
        
       
      </Card>
    );
}

export default Expences;