import React from 'react';

import classes from './HeaderTop.module.css';
import HeaderMenu from './HeaderMenu';

const HeaderTop = () => {
    return (
      <div className={classes.headerTop}>
        <div>
            <p className={classes.logo}>workOn</p>
        </div>
        <HeaderMenu />
      </div>
    );
}

export default HeaderTop;