import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  /// react hook ///
  const [title, setTitle] = useState(props.title);

  const AfterClick = () => {
    setTitle("Updated🔴🔴🔴");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      {" "}
      <ExpenseDate date={props.date} />
      <div>
        <h2 className="expense-item__description">{title}</h2>
      </div>
      <div>
        <h2 className="expense-item__price">${props.amount}</h2>
      </div>
      <button onClick={AfterClick}>change title</button>
    </Card>
  );
}

export default ExpenseItem;
