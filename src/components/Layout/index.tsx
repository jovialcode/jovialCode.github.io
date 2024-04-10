import React from 'react';
import '../../styles/global.css';
import '../../styles/theme.css';

import * as classes from './style.module.css';
import { Header } from "./Header"
import { StaticImage } from "gatsby-plugin-image"

interface LayoutProps {
  children: React.ReactElement;
}

export function Layout(props: LayoutProps): React.ReactElement {
  return (
    <div className={classes.Layout}>
      <Header />
      <div className={classes.BodyWrapper}>
        <main className={classes.ContentWrapper}>
          {props.children}
        </main>
      </div>
    </div>
  );
}
