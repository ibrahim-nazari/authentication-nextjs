import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { useContextHook } from './store';
import Authenticate from './components/Authenticate';
const PostDetails = () => {
    const router=useRouter();
    const {state,dispatch}=useContextHook();
    const {posts,user}=state;
const [post,setPost]=useState(null)
    useEffect(() => {
   setPost(posts.filter(post=>post._id==router.query.id)[0])
        
    }, [])
    return (post?<Authenticate>
        <div className="container">
            <h3 className="text-center">{post.title}</h3>
            <img src={post.image} style={{objectFit:"contain",width:"100%"}}  />
            <div className="d-flex justify-content-between"><p>{post.author} <span classNam="text-muted">On <strong>{new Date(post.createdAt).toDateString()}</strong></span></p>
            {user._id==post.author._id && <div><button  className="btn btn-sm btn-outline-success ">Edit</button><button  className="btn btn-sm btn-outline-danger">Danger</button></div>}</div>
            <div className="my-3" dangerouslySetInnerHTML={{__html: post.description.slice(0,100)}}></div>
        </div></Authenticate>:<div className="spinner-grow text-secondary" role="status">
  <span class="sr-only"></span>
</div>
    )
}

export default PostDetails
