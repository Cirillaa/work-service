import React, { useState } from "react";

import classes from './FilterVacanc.module.css';

const FilterVacanc = props => {
    const [enteredSalary, setEnteredSalary] = useState('');
    const [enteredCheck, setEnteredCheck] = useState(false);

    const checkedHandler = (event) => {
        setEnteredCheck(event.target.checked);
    }

    const salaryChangeHandler = (event) => {
        setEnteredSalary(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        props.onSubmitHandler(enteredSalary, enteredCheck);
    }

 return <form className={classes.form} onSubmit={submitHandler}>
    <label htmlFor='remote' className={classes.remote}>Remote: </label>
    <input type='checkbox' id='remote' className={classes.check} checked={enteredCheck} onChange={checkedHandler}></input>
    <label htmlFor='salary'>Salary from: </label>
    <input type='number' id='salary' min='0' value={enteredSalary} onChange={salaryChangeHandler}></input>
    <button>Find</button>
 </form>
}

export default FilterVacanc;