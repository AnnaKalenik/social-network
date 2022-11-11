import React from 'react';
import s from './Messenger.module.css'

const Messenger = () => {
  return (
    <div className={s.messenger}>

      <ul className={s.dialogs}>
        <li className={s.dialog}>
          <div className={s.photo_user}></div>
          <div className={s.name_user}>Constantine</div>
        </li>
        <li className={s.dialog}>
          <div className={s.photo_user}></div>
          <div className={s.name_user}>Anna</div>
        </li>
        <li className={s.dialog}>
          <div className={s.photo_user}></div>
          <div className={s.name_user}>Julia</div>
        </li>
        <li className={s.dialog}>
          <div className={s.photo_user}></div>
          <div className={s.name_user}>Sofia</div>
        </li>
        <li className={s.dialog}>
          <div className={s.photo_user}></div>
          <div className={s.name_user}>Alex</div>
        </li>
        <li className={s.dialog + ' ' + s.active}>
          <div className={s.photo_user}></div>
          <div className={s.name_user + ' ' + s.active}>Karina</div>
        </li>
      </ul>

      <div className={s.messages}>
        <div className={s.user}>
          <div className={s.data}>
            <div className={s.photo_user}></div>
            <div className={s.name_user}>Karina</div>
          </div>
          <div className={s.message}>Hi!🤗</div>
        </div>
        <div className={s.user}>
          <div className={s.data}>
            <div className={s.photo_user}></div>
            <div className={s.name_user}>Karina</div>
          </div>
          <div className={s.message}>How are you?</div>
        </div>
        <div className={s.user}>
          <div className={s.data}>
            <div className={s.photo_user}></div>
            <div className={s.name_user}>Ann</div>
          </div>
          <div className={s.message}>Yo!😎🤗</div>
        </div>
        <div className={s.user}>
          <div className={s.data}>
            <div className={s.photo_user}></div>
            <div className={s.name_user}>Ann</div>
          </div>
          <div className={s.message}>Great!</div>
        </div>
        <div className={s.user}>
          <div className={s.data}>
            <div className={s.photo_user}></div>
            <div className={s.name_user}>Ann</div>
          </div>
          <div className={s.message}>And you?</div>
        </div>
      </div>
    </div>
  )
}

export default Messenger;