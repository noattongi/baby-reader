import type { NextPage } from 'next'
import Head from 'next/head'
import App from './_app'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Baby Reader</title>
        <meta name="description" content="Teach your baby to read!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
