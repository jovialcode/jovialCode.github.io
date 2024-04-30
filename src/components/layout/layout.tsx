import React from 'react';
import '../../styles/global.css';
import '../../styles/theme.css';

import * as classes from './layout.module.css';
import { Header } from "./header"

interface LayoutProps {
  children: React.ReactElement;
}

export const Layout = (props: LayoutProps) => {
  return (
    <div className={classes.Layout}>
      <div className={classes.BodyWrapper}>
        <Header />
        <main className={classes.ContentWrapper}>
          {props.children}
        </main>
      </div>
    </div>
  );
}
