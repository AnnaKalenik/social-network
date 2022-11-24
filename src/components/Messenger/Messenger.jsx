import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Messenger.module.css';

const DialogItem = (props) => {
  let path = "/messages/dialog/" + props.id;

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
  let dialogsData = [
    {id: 1, name: 'Constantine'},
    {id: 2, name: 'Anna'},
    {id: 3, name: 'Julia'},
    {id: 4, name: 'Sofia'},
    {id: 5, name: 'Alex'},
    {id: 6, name: 'Karina'},
  ];

  let messagesData = [
    {id: 1, name: 'Karina', message: 'Hi!🤗'},
    {id: 2, name: 'Karina', message: 'How are you?'},
    {id: 3, name: 'Ann', message: 'Yo!😎🤗'},
    {id: 4, name: 'Ann', message: 'Great!'},
    {id: 5, name: 'Ann', message: 'And you?'},
  ];

  return (
    <div className={s.messenger}>

      <div className={s.dialogs}>
        <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
        <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
        <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
        <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
        <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
        <DialogItem id={dialogsData[5].id} name={dialogsData[5].name} />
      </div>

      <div className={s.messages}>
        <MessageItem name={messagesData[0].name} message={messagesData[0].message} />
        <MessageItem name={messagesData[1].name} message={messagesData[1].message} />
        <MessageItem name={messagesData[2].name} message={messagesData[2].message} />
        <MessageItem name={messagesData[3].name} message={messagesData[3].message} />
        <MessageItem name={messagesData[4].name} message={messagesData[4].message} />
      </div>
    </div>
  )
}

export default Messenger;