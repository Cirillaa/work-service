import React, { useState } from "react";

import classes from './FilterWorkers.module.css';

const FilterWorkers = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredCheck, setEnteredCheck] = useState(false);

  const checkExpHandler = (event) => {
    setEnteredCheck(event.target.checked)
  }
  const nameChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const workFormHandler = event => {
    event.preventDefault();
    props.onSubmitHandler(enteredName, enteredCheck)
  }

    return (
      <form className={classes.workForm} onSubmit={workFormHandler}>
        <label htmlFor="exp" >
          With experience:
        </label>
        <input
          type="checkbox"
          id="exp"
          className={classes.expCheck}
          checked = {enteredCheck}
          onChange={checkExpHandler}
        ></input>
        <label htmlFor="name">Title: </label>
        <input
          type="text"
          id="name"
          value = {enteredName}
          onChange = {nameChangeHandler}
        ></input>
        <button>Find</button>
      </form>
    );
}

export default FilterWorkers;