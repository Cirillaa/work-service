import React, { useState } from "react";

import classes from './Workers.module.css';
import FilterWorkers from "./FilterWorkers";
import WorkersList from "./WorkersList";

const Workers = props => {
    const [filteredName, setFilteredName] = useState('')
    const [filteredCheck, setFilteredCheck] = useState(false);

    const filteredWorkersHandler = (value, checked) => {
        setFilteredName(value);
        setFilteredCheck(checked);
    }

    return <section className={classes.workersSection}>
        <h3 className={classes.title}>Employees</h3>
        <FilterWorkers onSubmitHandler={filteredWorkersHandler}/>
        <WorkersList filteredName={filteredName} filteredCheck={filteredCheck}/>
    </section>
}

export default Workers;