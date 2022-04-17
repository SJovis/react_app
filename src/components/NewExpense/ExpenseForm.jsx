import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // USING ONE STATE VARIABLE TO HOLD ALL THE DATA
  //
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // USING ONE STATE VARIABLE TO HOLD ALL THE DATA
    //
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // UPDATE STATE THAT DEPENDS ON PREVIOUS STATE
    //
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    props.onSaveExpenseData(expenseData);
  };

  return(
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'></div>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type="date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
