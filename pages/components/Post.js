import React from 'react'
import Link from "next/link"
const post={title:"Adapting New Technology",img:"uploads/post1.jpeg",author:"Ibrahim Nazari",date:"jan 22, 2019",description:``}
const Post = ({post}) => {
    console.log(post);
    return (
        <div className="col-md-4 p-2 mb-5">
            <div className="col-md-12">
            <h5 style={{minHeight:"80px"}}>{post.title.length>100?post.title.slice(0,100):post.title}</h5>
            <img src={post.image} style={{width:"100%"}} />
            <p>{post.author} <span classNam="text-muted">On <strong>{new Date(post.createdAt).toDateString()}</strong></span></p>
            
            <div className="my-3" dangerouslySetInnerHTML={{__html: post.description.slice(0,100)}}></div>
            <Link href={"/post-detail?id="+post._id}>
            <a className="btn btn-outline-info btn-sm">Read More</a>
            </Link>
            
            </div>
           
        </div>
    )
}

export default Post
