import React from 'react';

import classes from './FavWorkers.module.css';
import heart from '../../../assets/heart.png'

const FavWorkers = props => {
    return <aside className={classes.favSection}>
        <div className={classes.favImg}>
            <img src={heart} width='100px' alt='heart'></img>
        </div>
    </aside>
}

export default FavWorkers;