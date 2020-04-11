import React, { Fragment } from 'react';
import { Global } from '@emotion/core';
import { globals, normalize } from './styles';
import { AppWrapper } from './app.styled';
import { Header, Routes, Sidebar } from './core';
import './styles/fonts.css';
import 'antd/es/style/index.css';

const App: React.FC<any> = () => {

  return (
    <Fragment>
      <Global styles={normalize} />
      <Global styles={globals} />
      <AppWrapper>
        <Header />
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Routes />
        </main>
      </AppWrapper>
    </Fragment>
  );
};

export default App;
