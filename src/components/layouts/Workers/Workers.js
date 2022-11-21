import React, { useState } from "react";

import classes from './Workers.module.css';
import FilterWorkers from "./FilterWorkers";
import WorkersList from "./WorkersList";
import FavWorkers from "./FavWorkers";

const Workers = props => {
    const [filteredName, setFilteredName] = useState('')
    const [filteredCheck, setFilteredCheck] = useState(false);
    const [favoriteSection, setFavoriteSection] = useState(false)

    const filteredWorkersHandler = (value, checked) => {
        setFilteredName(value);
        setFilteredCheck(checked);
    }

    const changeFavIcon = value => {
        setFavoriteSection(value);
    }

    return <section className={classes.workersSection} id='workers'>
        <h3 className={classes.title}>Employees</h3>
        <FilterWorkers onSubmitHandler={filteredWorkersHandler}/>
        <WorkersList filteredName={filteredName} filteredCheck={filteredCheck} changeFavIcon={changeFavIcon}/>
        {favoriteSection && <FavWorkers />}
    </section>
}

export default Workers;