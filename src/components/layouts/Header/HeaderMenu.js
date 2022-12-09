import React from 'react';

import classes from './HeaderMenu.module.css';

const HeaderMenu = () => {
    return (
      <ul className={classes.menu}>
        <a href="#header">
          <li className={classes.li}>Home</li>
        </a>
        <a href='#about'>
          <li className={classes.li}>About</li>
        </a>
        <a href='#vacancies'>
          <li className={classes.li}>Vacancies</li>
        </a>
        <a href='#workers'>
          <li className={classes.li}>Applicants</li>
        </a>
      </ul>
    );
}

export default HeaderMenu;