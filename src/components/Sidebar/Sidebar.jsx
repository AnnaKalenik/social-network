import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <nav className={s.nav}>
          <NavLink to='/profile' className={ activeLink => activeLink.isActive ? s.active : s.link }>
            <div className={s.name}>Profile</div>
          </NavLink>
          <NavLink to='/messages' className={ activeLink => activeLink.isActive ? s.active : s.link }>
            <div className={s.name}>Messages</div>
          </NavLink>
          <NavLink to='/news' className={ activeLink => activeLink.isActive ? s.active : s.link }>
            <div className={s.name}>News</div>
          </NavLink>
          <NavLink to='/music' className={ activeLink => activeLink.isActive ? s.active : s.link }>
            <div className={s.name}>Music</div>
          </NavLink>
          <NavLink to='/settings' className={ activeLink => activeLink.isActive ? s.active : s.link }>
            <div className={s.name}>Settings</div>
          </NavLink>
      </nav>
    </aside>
  )
}
export default Sidebar;