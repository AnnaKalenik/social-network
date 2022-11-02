import React from 'react';

const Profile = () => {
  return (
    <main className='main'>
      <div className='main__bg'>
        <img className='main__img' src='https://celes.club/uploads/posts/2022-05/thumbs/1653682560_8-celes-club-p-fon-dlya-uroka-v-zum-krasivie-9.png' alt='Фоновое изображение профиля'></img>
      </div>
      <div className='main__ava'>
        <div className='main__photo'>
          <img className='main__user-photo' src='https://n1s1.hsmedia.ru/1e/e2/3a/1ee23a077365f02b501d0c815126785c/728x546_1_7dd3ae90748f9a461d8e98347f765534@1616x1212_0xac120003_18985384621638440665.jpeg' alt='Фото пользователя' />
        </div>
        <div className='main__description'>
          <h2 className='main__name title'>Ann Friedman</h2>
          <ul className='main__list'>
            <li className='main__item'>Date: <span className='main__span'>2 January</span></li>
            <li className='main__item'>City: <span className='main__span'>Minsk</span></li>
            <li className='main__item'>Educ: <span className='main__span'>BSTU 2016</span></li>
            <li className='main__item'>WebS: <span className='main__span'>my-site.com</span></li>
          </ul>
        </div>
      </div>
      <div className='main__posts'>
        <h2 className='main__title title'>My posts</h2>
        <div className='main__new-post'>
          <form action='post' className='main__form'>
            <textarea name='text' id='field-text' className='main__input' placeholder='your new post...' rows='1'></textarea>
            <input type="submit" className='main__btn'></input>
          </form>
        </div>
        <ul className='main__publ-posts'>
          <li className='main__post main__post_1'>My post 1</li>
          <li className='main__post main__post_2'>My post 2</li>
          <li className='main__post main__post_3'>My post 3</li>
          <li className='main__post main__post_4'>My post 4</li>
          <li className='main__post main__post_5'>My post 5</li>
          <li className='main__post main__post_6'>My post 6</li>
          <li className='main__post main__post_7'>My post 7</li>
          <li className='main__post main__post_8'>My post 8</li>
        </ul>
      </div>
    </main>
  )
}
export default Profile;