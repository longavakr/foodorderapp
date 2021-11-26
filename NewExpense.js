import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);
  const saveExpenseDataHandler = (enteredexpenseData) => {
    const expenseData = {
      ...enteredexpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditing = () => {
    setEditing(true);
  };
  const stopEdittingfom = () => {
    setEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense </button>}
      {isEditing && (
        <NewExpenseForm
          onSavedExpenseData={saveExpenseDataHandler}
          oncancel={stopEdittingfom}
        />
      )}
    </div>
  );
};

export default NewExpense;
