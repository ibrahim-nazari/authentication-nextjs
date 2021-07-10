import React from 'react'
import Post from './Post'

const Posts = ({posts,user}) => {
    return (
        <div className="row">
            {posts.map(post=>(<Post  post={post} key={post._id}/>))}
            
           
        </div>
    )
}

export default Posts
