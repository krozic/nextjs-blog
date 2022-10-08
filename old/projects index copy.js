import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styles from '../../styles/Layout.module.css'
import PortfolioList from '../../components/PortfolioList'
import { getPortfolio } from '/src/api.js'

export default function Home({ posts }) {
  return (
    <div className={ styles.header }>
      <h1>Projects</h1>
      <h3>Projects & Applications I&apos;ve Created</h3>
      <div className={styles.container}>
        <PortfolioList posts={posts} />
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  // const articles = await res.json()

  // Looks in the root folder for a folder called 'posts
  const files = fs.readdirSync(path.join('posts'))
  // returns an array of file names in that folder
  // create an array that includes all the slugs and frontmatter for the md's

  const posts = files.map(filename => {
    // Create slug by using string replace method
    const slug = filename.replace('.md', '')

    // Get frontmatter
    // First read the full contents of the file
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  console.log(getPortfolio())

  return {
    props: {
      posts
   }
  }
}