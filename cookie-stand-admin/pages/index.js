// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import CookieStandAdmin from '../components/CookieStandAdmin'
import { useState } from 'react';
import Form from './form';
import LoginForm from '../components/LoginForm';
import axios from 'axios'
import { stringify } from 'postcss';

export default function Home({children}) {
  const [data, setData] = useState({});
  const result = JSON.stringify(data)
  const [tokens, setTokens] = useState()
  const [isLoggedIn, setLoggedIn] = useState(false)
  async function getTokens(userData) {
    try {
      // get token given username and password
      const url = '' --how?--
      const response = await axios.post(url, userData)
      setTokens(response.data)
      setLoggedIn(true)
      
    } catch () {
      
    }

    
  }

  return (
    <div>
      {isLoggedIn? 
    <CookieStandAdmin/>
    :
    <LoginForm submitLogin = {getTokens}  />
     }
    </div>
  )
}
