import React, { useState, useCallback, useEffect} from "react";

import classes from './WorkersList.module.css';
import WorkerItem from "./WorkerItem";

const WorkersList = props => {
    const [workers, setWorkers] = useState([]);
    const [error, setError] = useState(null);

    const fetchWorkers = useCallback(async () => {
        setError(null)

        try{
            const response = await fetch('https://vakancies-fb3f2-default-rtdb.firebaseio.com/workers.json');
            if(!response.ok) {
                throw new Error('Something went wrong');
            }
            const data = await response.json();

            const loadedWorkers = [];

            for (const key in data) {
                loadedWorkers.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    tel: data[key].tel,
                    sex: data[key].sex,
                    exp: data[key].exp
                })
            }
            setWorkers(loadedWorkers);
        } catch(error) {
            setError(error.message)
        }
    }, []);

    useEffect(() => {
        fetchWorkers()
    }, [fetchWorkers])

    const filtredWorkers = workers.filter(worker => {
        if(props.filtredName && props.filteredCheck) {
            return worker.name.toLowerCase() === props.filteredName.toLowerCase() && props.filteredCheck === worker.exp
        } else if (props.filteredCheck) {
            return worker.exp === props.filteredCheck;
        } else if(props.filteredName) {
            return worker.name.toLowerCase() === props.filteredName.toLowerCase();
        }else {
            return worker
        }
    })

    const onClickFav = (value) => {
        props.changeFavIcon(value);
    }


    return (
      <ul className={classes.list}>
        {error && <p>{error}</p>}
        {filtredWorkers.length === 0 && <p className={classes.noWorkers}>Sorry, no candidates found</p>}
        {filtredWorkers.map((worker) => (
          <WorkerItem onClickFav={onClickFav}
            key={worker.id}
            name={worker.name}
            description={worker.description}
            tel={worker.tel}
            sex={worker.sex}
            exp={worker.exp}
          />
        ))}
      </ul>
    );
}

export default WorkersList;
