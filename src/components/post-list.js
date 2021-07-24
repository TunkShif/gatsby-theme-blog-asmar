import React from 'react'
import Heading from './heading'
import Post from './post'

const PostList = ({posts}) => {
  return (
    <div>
      {posts.length !== 0 && posts.map(post => 
        <Post key={post.id}
              slug={post.slug}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              desc={post.frontmatter.desc}
              tags={post.frontmatter.tags} />
      )}
      {posts.length === 0 &&
        <Heading iconClass="far fa-sad-tear" title="No posts yet..." />
      }
    </div>
  )
}

export default PostList