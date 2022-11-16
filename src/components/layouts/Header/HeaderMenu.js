import React from 'react';

import classes from './HeaderMenu.module.css';

const HeaderMenu = () => {
    return (
      <ul className={classes.menu}>
        <li className={classes.li}>Home</li>
        <li className={classes.li}>About</li>
        <li className={classes.li}>Vacancies</li>
        <li className={classes.li}>Applicants</li>
      </ul>
    );
}

export default HeaderMenu;