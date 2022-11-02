import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <a href='/#' className={s.logo}>MyApp</a>
      </div>
    </header>
  )
}
export default Header;