import React, { useState } from "react";

import classes from './WorkerItem.module.css';
import femaleIcon from '../../../assets/femaleIcon.png';
import maleIcon from '../../../assets/male.png';
import expIcon from '../../../assets/exp.png';
import unFav from '../../../assets/unFav.png';
import fav from '../../../assets/fav.png'

const WorkerItem = props => {
  const favIcon = <img src={fav} width="50px" alt="favIcon"></img>;
  const unFavIcon = <img src={unFav} width="50px" alt="unFavIcon"></img>;
  const [favoriteState, setFavoriteState] = useState(unFavIcon)

    let sexIcon;
    

    if(props.sex === 'female') {
        sexIcon = <img src={femaleIcon} width='200px' alt='female'></img>;
    } else {
        sexIcon = <img src={maleIcon} width='200px' alt='male'></img>;
    }

    const favoriteChangeHandler = (event) => {
      if (favoriteState === unFavIcon){
        setFavoriteState(favIcon);
        props.onClickFav(true);
      } else {
        setFavoriteState(unFavIcon)
        props.onClickFav(false);
      }
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
        <div className={classes.favWorker} onClick={favoriteChangeHandler}>
          {favoriteState}
        </div>
      </li>
    );
}

export default WorkerItem;