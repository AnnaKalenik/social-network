import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Messenger.module.css';

const DialogItem = (props) => {
  let path = "/messages/" + props.id;

  return (
    <NavLink to={path} className={ activeLink => activeLink.isActive ? s.active : s.dialog }>
      <div className={s.photo_user}></div>
      <div className={s.name_user}>{props.name}</div>
    </NavLink>
  )
}

const MessageItem = (props) => {
  return (
    <div className={s.user}>
      <div className={s.data}>
        <div className={s.photo_user}></div>
        <div className={s.name_user}>{props.name}</div>
      </div>
      <div className={s.message}>{props.message}</div>
    </div>
  )
}

const Messenger = () => {
  return (
    <div className={s.messenger}>

      <div className={s.dialogs}>
        <DialogItem id='dialog1' name='Constantine' />
        <DialogItem id='dialog2' name='Anna' />
        <DialogItem id='dialog3' name='Julia' />
        <DialogItem id='dialog4' name='Sofia' />
        <DialogItem id='dialog5' name='Alex' />
        <DialogItem id='dialog6' name='Karina' />
      </div>

      <div className={s.messages}>
        <MessageItem name='Karina' message='Hi!🤗' />
        <MessageItem name='Karina' message='How are you?' />
        <MessageItem name='Ann' message='Yo!😎🤗' />
        <MessageItem name='Ann' message='Great!' />
        <MessageItem name='Ann' message='And you?' />
      </div>
    </div>
  )
}

export default Messenger;