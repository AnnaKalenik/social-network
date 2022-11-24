import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.publ_posts}>
      <div className={s.photo_user}></div>
      <span className={s.post}>{props.message}</span>
      <span className={s.like}>Like: {props.like}</span>
    </div>
  )
}
export default Post;