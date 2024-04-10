import React from 'react';

import * as classes from './style.module.css';
import { StaticImage } from "gatsby-plugin-image"

export const Header = (): React.ReactElement => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <header className={classes.Header}>
      <div className={classes.Logo} >
        <StaticImage src={"../../../static/images/logo.png"} alt={"logo"}/>
      </div>
      <nav>
        <ul className={classes.TopNavigationBar}>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
