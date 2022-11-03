import React from 'react';
import s from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.item}><a href='/#' className={s.link}>Profile</a></li>
          <li className={s.item}><a href='/#' className={s.link}>Messages</a></li>
          <li className={s.item}><a href='/#' className={s.link}>News</a></li>
          <li className={s.item}><a href='/#' className={s.link}>Music</a></li>
          <li className={s.item}><a href='/#' className={s.link}>Settings</a></li>
        </ul>
      </nav>
    </aside>
  )
}
export default Sidebar;