import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    {id: 1, message: "Hi! I'm so glad to see you! How are you?😄", like: 12},
    {id: 2, message: "WOW! This is my first post?😎", like: 2},
    {id: 3, message: "I'm going on vacation. See you next month.🌏🖐", like: 5},
    {id: 4, message: "I like your photo! Cool)😍👍", like: 8},
  ];

  return (
    <div className={s.posts}>

      <h2 className={s.title}>My posts</h2>
      <div className={s.new_post}>
        <textarea name='text' id='field-text' className={s.input} placeholder='your new post...' rows='2'></textarea>
        <button className={s.btn}>Add post</button>
      </div>
      
      <Post message={postsData[0].message} like={postsData[0].like} />
      <Post message={postsData[1].message} like={postsData[1].like} />
      <Post message={postsData[2].message} like={postsData[2].like} />
      <Post message={postsData[3].message} like={postsData[3].like} />

    </div>
  )
}

export default MyPosts;