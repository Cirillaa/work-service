import React from "react";

import classes from './VacancItem.module.css';
import icon from '../../../assets/homeIcon.png'

const VacancItem = props => {

    let remote = props.remote;
    let content;
    if (remote) {
        content = (
            <img src={icon} alt='remote' width='70'></img>
        );
    }
    return (
      <li className={classes.item}>
        <div>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <h4>Telephone</h4>
          <p>{props.tel}</p>
        </div>
        <div className={classes.right}>
          {content}
          <div className={classes.salaryItem}>
            <h4>Salary p/week</h4>
            <p className={classes.salary}>{props.salary}</p>
          </div>
        </div>
      </li>
    );
};

export default VacancItem;