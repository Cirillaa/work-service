import React, { useState, useCallback, useEffect } from "react";

import classes from './VacancList.module.css';
import VacancItem from "./VacancItem";

const VacancList = props => {
    const [vacancies, setVacancies] = useState([]);
    const [error, setError] = useState(null);
    const [lengthVacanc, setLengthVacanc] = useState(false);

    const fetchVakancHandler = useCallback( async () => {
        setError(null)
    
    try {
        const  response = await fetch("https://vakancies-fb3f2-default-rtdb.firebaseio.com/vacancies.json");
        if(!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();

        const loadedVacancies = [];

        for(const key in data) {
            loadedVacancies.push({
                id: key,
                name: data[key].name,
                description: data[key].description,
                salary: data[key].salary,
                tel: data[key].tel,
                remote: data[key].remote
            })
        }
        setVacancies(loadedVacancies);
        
    } catch (error) {
        setError(error.message);
    }
    }, [])



    useEffect(() => {
        fetchVakancHandler()

        setLengthVacanc(vacancies.length > 10);

    }, [fetchVakancHandler, vacancies]);
    
    const addHandler = () => {
        props.length(lengthVacanc);
    }

    const filteredVacanc = vacancies.filter(vacanc => {
      if(!props.filCheck){
        return vacanc.salary >= props.filSalary;
      } else {
        return vacanc.salary >= props.filSalary && props.filCheck === vacanc.remote;
      }
      
    })


    return (
      <ul className={classes.vakancList} onChange={addHandler}>
        {error && <p>{error}</p>}
        {filteredVacanc.length === 0 && <p className={classes.nothingFound}>Found no vacancies.</p>}
        {filteredVacanc.map((vacanItem) => (
          <VacancItem
            key={vacanItem.id}
            name={vacanItem.name}
            description={vacanItem.description}
            salary={vacanItem.salary}
            tel={vacanItem.tel}
            remote={vacanItem.remote}
          />
        ))}
      </ul>
    );
}

export default VacancList;