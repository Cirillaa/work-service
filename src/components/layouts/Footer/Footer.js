import React from "react";

import classes from './Footer.module.css';

const Footer = () => {
    return (
      <section className={classes.footer}>
        <div>
          <p>All rights are reserved</p>
        </div>
        <div>
          <p>2022</p>
        </div>
      </section>
    );
}

export default Footer;