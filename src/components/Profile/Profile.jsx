import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div>

      <div className={s.bg}>
        <img className={s.img} src='https://celes.club/uploads/posts/2022-05/thumbs/1653682560_8-celes-club-p-fon-dlya-uroka-v-zum-krasivie-9.png' alt='Profile background'></img>
      </div>
      <div className={s.ava}>
        <div className={s.photo}>
          <img className={s.user_photo} src='https://n1s1.hsmedia.ru/1e/e2/3a/1ee23a077365f02b501d0c815126785c/728x546_1_7dd3ae90748f9a461d8e98347f765534@1616x1212_0xac120003_18985384621638440665.jpeg' alt="Page owner's photography" />
        </div>
        <div className={s.description}>
          <h2 className={s.name}>Ann Friedman</h2>
          <ul className={s.list}>
            <li className={s.item}>Date: <span className={s.span}>2 January</span></li>
            <li className={s.item}>City: <span className={s.span}>Minsk</span></li>
            <li className={s.item}>Educ: <span className={s.span}>BSTU 2016</span></li>
            <li className={s.item}>WebS: <span className={s.span}>my-site.com</span></li>
          </ul>
        </div>
      </div>

      <MyPosts />
      
    </div>
  )
}
export default Profile;