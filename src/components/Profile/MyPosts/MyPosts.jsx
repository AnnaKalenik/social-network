import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.posts}>

      <h2 className={s.title}>My posts</h2>
      <div className={s.new_post}>
        <textarea name='text' id='field-text' className={s.input} placeholder='your new post...' rows='2'></textarea>
        <button className={s.btn}>Add post</button>
      </div>
      
      <Post message="Hi! I'm so glad to see you! How are you?😄" />
      <Post message="WOW! This is my first post?😎" />
      <Post message="I'm going on vacation. See you next month.🌏🖐" />
      <Post message="I like your photo! Cool)😍👍" />

    </div>
  )
}
export default MyPosts;