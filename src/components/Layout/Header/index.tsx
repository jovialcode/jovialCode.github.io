import React from 'react';

import * as classes from './style.module.css';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const Header = (): React.ReactElement => {
  return (
    <header className={classes.Header}>
      <div className={classes.Logo} >
        <Link to={"/"}>
          <StaticImage src={"../../../static/images/logo.png"} alt={"logo"}/>
        </Link>
      </div>
      <nav>
        <ul className={classes.TopNavigationBar}>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
