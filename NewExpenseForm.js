import React, { useState } from "react";

import "./ExpenseForm.css";

const NewExpenseForm = (props) => {
  const [enteredTitle, SetenteredTitle] = useState("");
  const [enteredAmount, SetEnteredAmount] = useState("");
  const [enteredDate, SetEnteredDate] = useState("");

  const TitlechangeHandler = (event) => {
    SetenteredTitle(event.target.value);
  };

  const amountChangehandler = (event) => {
    SetEnteredAmount(event.target.value);
  };
  const datechangeHandler = (event) => {
    SetEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate + "T00:00:00"),
    };

    props.onSavedExpenseData(expenseData);

    SetenteredTitle("");
    SetEnteredAmount("");
    SetEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={TitlechangeHandler}
          />
        </div>

        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangehandler}
          />
        </div>

        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max=" 2022-12-31"
            value={enteredDate}
            onChange={datechangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.oncancel}>
          cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
