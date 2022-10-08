import fs from 'fs'
import path from 'path'
import styles from '../../styles/Layout.module.css'
import ArticleList from '../../components/PostList'

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      {/* <ArticleList articles={posts} /> */}
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

    console.log(markdownWithMeta)

    return {
      slug
    }
  })



  return {
    props: {
      posts: 'string'
    }
  }
}