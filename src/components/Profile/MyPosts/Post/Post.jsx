import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.publ_posts}>
      <div className={s.photo_user}></div>
      <span className={s.post}>This is my first post!</span>
    </div>
  )
}
export default Post;