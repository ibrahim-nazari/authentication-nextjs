import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Authenticate from './components/Authenticate'
import Posts from './components/Posts'

export default function Home() {
  return (
    <Authenticate>
      <div className="container mt-3">
      <h3 className="text-center">Latest Post</h3>
      <hr/>
      <Posts/>
    </div>
    </Authenticate>
    
  )
}
