// import fs from 'fs'
// import path from 'path'
import matter from 'gray-matter'
import styles from '../../styles/Layout.module.css'
import PortfolioList from '../../components/PortfolioList'
import { getPortfolio } from '/src/api'

export default function Home({ portfolio }) {
  return (
    <div className={ styles.header }>
      <h1>Projects</h1>
      <h3>Projects & Applications I&apos;ve Created</h3>
      <div className={ styles.container }>
        <PortfolioList posts={ portfolio } />
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const portfolio = getPortfolio()

  return {
    props: {
      portfolio
   }
  }
}