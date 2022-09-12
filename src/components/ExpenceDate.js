import "./ExpenceDate.css";
function ExpenceDate(props){
    const month = props.date.toLocaleString('en-US', { month : 'long'});
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-date"> 
            <div className="expense-date_mont">{month}</div>
            <div className="expense-date_year">{year}</div>
            <div className="expense-date_day">{day}</div>
        </div>
    );

}
export default ExpenceDate;