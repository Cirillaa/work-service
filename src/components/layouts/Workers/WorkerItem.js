import React from "react";

import classes from './WorkerItem.module.css';
import femaleIcon from '../../../assets/femaleIcon.png';
import maleIcon from '../../../assets/male.png';
import expIcon from '../../../assets/exp.png'

const WorkerItem = props => {

    let sexIcon;

    if(props.sex === 'female') {
        sexIcon = <img src={femaleIcon} width='200px' alt='female'></img>;
    } else {
        sexIcon = <img src={maleIcon} width='200px' alt='male'></img>;
    }

    return (
      <li className={classes.worker}>
        <div className={classes.workerDesc}>
          <div className={classes.workerImg}>{sexIcon}</div>
          <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p className={classes.tel}> Telephone: {props.tel}</p>
          </div>
        </div>
        {props.exp && (
          <div className={classes.expSection}>
            <h4>work experience</h4>
            <img src={expIcon} alt="yes" width="50px"></img>
          </div>
        )}
      </li>
    );
}

export default WorkerItem;