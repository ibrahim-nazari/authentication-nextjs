import React, { useState } from 'react'
import Authenticate from './components/Authenticate'
import firebase from "../firebaseClient"
import  { verifyIdToken } from "../firebaseAdmin";
import nookies from "nookies"
import { useContextHook } from './store';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { parseCookies } from 'nookies'

const addnewpost = () => {
    const {state,dispatch}=useContextHook();
    const {user}=state;
    const [post,setPost]=useState({title:"",image:"",description:""});
    const cookies = parseCookies()

    const changed=(e)=>{
        let data=new FormData();
        data.append("image",e.target.files[0]);
        axios.post("/api/uploadImage",data).then(res=>{
        setPost({...post,["image"]:res.data})
        console.log(res.data);
        }).catch(error=>console.log(error.message))
    }

    const addPost=(e)=>{
     e.preventDefault();
     let newPost={...post,author:user.name,author_avatar:user.avatar,author_id:user._id}
     const config = {
        headers: { Authorization: cookies.token }
    };
     axios.post("/api/post",newPost,config).then(res=>{
         toast.success("post added successfully")
         dispatch({type:"ADD_POSTS",payload:res.data})
console.log(res.data);
     }).catch(error=>console.log(error.message))
    }
    return (
    <Authenticate>
       <div className="container mt-3">
           <h3 className="text-center">Add new post</h3>
           <div className="col-md-6 offset-3 mt-5">
               <form>
                   <div className="form-group">
                       <label>Title</label>
                       <input type="text" value={post.title} className="form-control" onChange={e=>setPost({...post,["title"]:e.target.value})} />
                   </div>
                   <div className="form-group mt-3">
                       <label>Description</label>
            
       <Editor
         onEditorChange={(newText) => setPost({...post,["description"]:newText})}
        
         init={{
           height: 300,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />
                   </div>
                   <div className="form-group mt-5">
                       <label>Select an image</label>
                      <input type="file" onChange={changed} className="form-control"  />
                   </div>
                   <div className="form-group mt-5">
                       <button className="btn btn-success" onClick={addPost}>Add Post</button>
                   </div>
               </form>
           </div>
       </div>
    </Authenticate>
    )
}

export default addnewpost
export async function getServerSideProps(context) {
   try {
    const cookies=nookies.get(context);
    const user=await verifyIdToken(cookies.token);
    return {
      props: {user},
    }
       
   } catch (error) {
       context.res.writeHead(302,{location:"/login"})
       context.res.end();
       return{
           porps:{}
       }
   }
  }
