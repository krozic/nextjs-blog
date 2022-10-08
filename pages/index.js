import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'
import Technologies from '../components/Technologies'
import Summary from '../components/Summary'

export default function Home() {
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>Kyle Rozic</title>
        <meta name='keywords' content='data engineering, data analytics, data science, app development.' />
      </Head>
      <Summary />
      <Technologies />
    </div>
  )
}

