import React from 'react'

export default function PostItem({ posts, removePost }) {
  return (
    <>
      {posts.map(el => <div key={el.id} className='PostItem'>
        <h3>Title: {el.title}</h3>
        <h4>Slug: {el.slug}</h4>
        <button>Изменить Post</button>
        <button onClick={() => removePost(el.id)}>Удалить Post</button>
        </div>)}
    </>
  )
}
