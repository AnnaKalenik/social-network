import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <nav className={s.nav}>
        <ul>
          <li className={s.item}>
            <NavLink to='/profile' className={ activeLink => activeLink.isActive ? s.active : s.link }>Profile</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to='/messages' className={ activeLink => activeLink.isActive ? s.active : s.link }>Messages</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to='/news' className={ activeLink => activeLink.isActive ? s.active : s.link }>News</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to='/music' className={ activeLink => activeLink.isActive ? s.active : s.link }>Music</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to='/settings' className={ activeLink => activeLink.isActive ? s.active : s.link }>Settings</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
export default Sidebar;