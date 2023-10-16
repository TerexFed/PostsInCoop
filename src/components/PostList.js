import React from 'react'
import PostItem from './PostItem'

export default function PostList({ posts, removePost }) {


  return (
    <div className='PostList'>
      <PostItem posts={posts} removePost={removePost} />
    </div>
  )
}
