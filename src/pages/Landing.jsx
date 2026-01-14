import React from 'react'
import Header from '../components/header/Header'
import Features from '../components/features/Features'
import Bento from '../components/bento/Bento'
import Blog from '../components/blog/Blog'
import Global from '../components/global/Global'
import Mail from '../components/mail/Mail'
import Stats from '../components/stats/Stats'

const Landing = () => {
  return (
    <div>
      <Header/>
      <Features/>
      <Bento/>
      <Global/>
      {/* <Blog/> */}
      {/* <Stats/> */}
      <Mail/>
    </div>
  )
}

export default Landing
