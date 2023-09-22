import React from 'react';
import s from './Header.module.scss';
import Menu from '../Menu/Menu';

const Header = () => {
  return (
    <header className={s.header}>
      <h1>STOCKS</h1>
      <Menu />
    </header>
  );
};

export default Header;
