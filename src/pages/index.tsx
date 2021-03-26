import React from 'react'
import Head from 'next/head'
import AvatarUpload from '../components/AvatarUpload';

const  Home : React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main >
        <AvatarUpload/>
      </main>
    </div>
  )
}

export default Home
