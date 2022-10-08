// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'
import styles from '../../styles/Layout.module.css'
import PostList from '../../components/PostList'
import { getPosts } from '/src/api'

export default function Home({ posts }) {
  return (
    <div>
      <div className={ styles.header }>
        <h1>All Projects and Blog Posts</h1>
        <h3>Projects & Applications I&apos;ve Created</h3>
      </div>
      <div className={styles.container}>
        <PostList posts={posts} />
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  // const files = fs.readdirSync(path.join('posts'))

  // const posts = files.map(filename => {
  //   const slug = filename.replace('.mdx', '')

  //   const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
  //   const { data: frontmatter } = matter(markdownWithMeta)

  //   return {
  //     slug,
  //     frontmatter
  //   }
  // })
  const posts = getPosts()

  return {
    props: {
      posts
   }
  }
}