import React, { useState } from "react";

import classes from './Vacancies.module.css';
import FilterVacanc from "./FilterVacanc";
import VacancList from "./VacancList";
import AddVacancy from "./AddVacancy";

const Vacancies = (props) => {
    const [filteredSalary, setFilteredSalary] = useState('');
    const [filterCheck, setFilterCheck] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [lengthList, setLengthList] = useState(false);

    const addVacancyHandler = () => {
      setModalVisible(true);
    }

    const HideModal = () => {
      setModalVisible(false);
    }

    const filteredSalaryHandler = (value, checked) => {
        setFilteredSalary(value);
        setFilterCheck(checked);
    }

    const lentghListHandler = (value) => {
      setLengthList(value);
    }

    return (
      <section className={classes.vacanciesMain} id='vacancies'>
        <h3 className={classes.title}>Vacancies</h3>
        <div className={classes.addVacancy}><button className={classes.buttonAdd} onClick={addVacancyHandler}>Add vacancy</button></div>
        {modalVisible && <AddVacancy onClose={HideModal} list={lengthList}/>}
        <FilterVacanc onSubmitHandler={filteredSalaryHandler} />
        <VacancList filSalary={filteredSalary} filCheck={filterCheck} length={lentghListHandler}/>
      </section>
    );
}

export default Vacancies;