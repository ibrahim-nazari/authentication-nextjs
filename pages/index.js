import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Authenticate from './components/Authenticate'
import Posts from './components/Posts'
import { useContextHook } from './store'

export default function Home() {
  const {state,dispatch}=useContextHook();
const {posts}=state;

  useEffect(() => {
    axios.get("/api/post").then(res=>{
    dispatch({type:"ADD_POSTS",payload:res.data})
    }).catch(error=>console.log(error.message))
  }, [dispatch])
 
  return (
    <Authenticate>
      {posts && <div className="container mt-3">
      <h3 className="text-center">Latest Post</h3>
      <hr/>
      <Posts posts={state.posts} />
    </div>}
    </Authenticate>
    
  )
}
