import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <main className={s.main}>
      <div className={s.bg}>
        <img className={s.img} src='https://celes.club/uploads/posts/2022-05/thumbs/1653682560_8-celes-club-p-fon-dlya-uroka-v-zum-krasivie-9.png' alt='Фоновое изображение профиля'></img>
      </div>
      <div className={s.ava}>
        <div className={s.photo}>
          <img className={s.user_photo} src='https://n1s1.hsmedia.ru/1e/e2/3a/1ee23a077365f02b501d0c815126785c/728x546_1_7dd3ae90748f9a461d8e98347f765534@1616x1212_0xac120003_18985384621638440665.jpeg' alt='Фото пользователя' />
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
      <div className={s.posts}>
        <h2 className={s.title}>My posts</h2>
        <div className={s.new_post}>
          <form action='post' className={s.form}>
            <textarea name='text' id='field-text' className={s.input} placeholder='your new post...' rows='1'></textarea>
            <input type="submit" className={s.btn}></input>
          </form>
        </div>
        <ul className={s.publ_posts}>
          <li className={s.post}>My post 1</li>
          <li className={s.post}>My post 2</li>
          <li className={s.post}>My post 3</li>
          <li className={s.post}>My post 4</li>
          <li className={s.post}>My post 5</li>
          <li className={s.post}>My post 6</li>
          <li className={s.post}>My post 7</li>
          <li className={s.post}>My post 8</li>
        </ul>
      </div>
    </main>
  )
}
export default Profile;