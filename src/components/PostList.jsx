import React, { useContext } from 'react'
import PostItem from './PostItem'
import { Context } from '../Context/Context'

export default function PostList() {
  const { posts } = useContext(Context)
  return (
    <div className='PostList'>
      {posts.map(el => <PostItem key={el.id} el={el} />)}
    </div>
  )
}
