import React, { useContext } from 'react'
import { Context } from '../Context/Context'

export default function PostItem({ el }) {
  const { removePost, changePost } = useContext(Context)
  return (
    <>
      <div className='PostItem'>
        <h3>Title: <span>{el.title}</span></h3>
        <h4>Slug: <span>{el.slug}</span></h4>
        <button onClick={() => changePost(el.id)}>Изменить Post</button>
        <button onClick={() => removePost(el.id)}>Удалить Post</button>
      </div>
    </>
  )
}
