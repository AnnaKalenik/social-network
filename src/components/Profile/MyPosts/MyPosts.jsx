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
      
      <Post />
    </div>
  )
}
export default MyPosts;