import React from 'react';
import '../../styles/global.css';
import '../../styles/theme.css';

import * as classes from './style.module.css';
import { Header } from "./Header"

interface LayoutProps {
  children: React.ReactElement;
}

export function Layout(props: LayoutProps): React.ReactElement {
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
