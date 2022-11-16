import React from 'react';


import classes from './Header.module.css';
import Button from '../../UI/Button';
import HeaderTop from './HeaderTop';

const Header = (props) => {

    return (
      <header className={classes.header}>
        <HeaderTop />
        <section className={classes.headerInfo}>
          <h2 className={classes.title}>
            Work on, <br />
            find your own
          </h2>
          <p className={classes.text}>Service for finding employees and jobs</p>
          <div className={classes.buttons}>
            <Button type="button">Find worker</Button>
            <Button type="button">Need work</Button>
          </div>
        </section>
      </header>
    );
}

export default Header;