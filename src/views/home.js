import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Central Metrics Agent</title>
        <meta property="og:title" content="Central Metrics Agent" />
      </Helmet>
    </div>
  )
}

export default Home
