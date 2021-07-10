import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { useContextHook } from './store';
import Authenticate from './components/Authenticate';
import Avatar from 'react-avatar';
import Image from 'next/image'
const PostDetails = () => {
    const router=useRouter();
    const {state,dispatch}=useContextHook();
    const {posts,user}=state;
const [post,setPost]=useState(null)
    useEffect(() => {
        if(posts){
           setPost(posts.filter(post=>post._id==router.query.id)[0]) 
        }
   
        
    }, [posts])
    return (post?<Authenticate>
        <div className="container">
            <h3 className="text-center">{post.title}</h3>
            
            <Image src={`/${post.image}`} alt={post.title} width={1400} height={600}
            objectFit="contain"
     layout="responsive" />
            <div className="d-flex justify-content-between"><div className="d-flex my-3"><Avatar style={{marginRight:"12px"}}  name={post.author} src={post.author_avatar}  size="30" round={true} />
            <p>{post.author} <span classNam="text-muted">On <strong>{new Date(post.createdAt).toDateString()}</strong></span></p>
            </div>
            {user._id==post.author._id && <div><button  className="btn btn-sm btn-outline-success ">Edit</button><button  className="btn btn-sm btn-outline-danger">Danger</button></div>}</div>
            <div className="my-3" dangerouslySetInnerHTML={{__html: post.description}}></div>
        </div></Authenticate>:<div className="spinner-grow text-secondary" role="status">
  <span className="sr-only"></span>
</div>
    )
}

export default PostDetails
