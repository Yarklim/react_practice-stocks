import React from 'react';
import s from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul className={s.menuList}>
        <li className={s.menuItem}>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : null)}
            to="/"
          >
            Main
          </NavLink>
        </li>
        <li className={s.menuItem}>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : null)}
            to="/stocks"
          >
            Stocks
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
