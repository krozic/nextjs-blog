// import fs from 'fs'
// import path from 'path'
import Link from 'next/link'
import Image from 'next/image'
import matter from 'gray-matter'
import { marked } from 'marked'
import { getTags, getPosts } from '/src/api'
import styles from '../../styles/Layout.module.css'
import tagStyles from '../../styles/Tags.module.css'
import PortfolioList from '../../components/PortfolioList'

const tag = ({ 
	slug, 
	posts
	// frontmatter: { title, stack, date, featuredImg }, 
	// content 
}) => {
	// const {slug} = router.query
	
	return (
		<div>
			<div className={ tagStyles.header }>
				<div>
					<h1>{ slug }</h1>
				</div>
				<div>
					<h3><Link href='/tags'>All Tags</Link></h3>
				</div>
			</div>
			<hr className='test'></hr>
      {/* <h1>Projects</h1>
      <h3>Projects & Applications I&apos;ve Created</h3> */}
      <div className={ styles.container }>
        <PortfolioList posts={ posts } />
      </div>
			<div>
				{/* <div dangerouslySetInnerHTML={{__html: marked.parse(content)}}></div> */}
			</div>
			<br />
    </div>
	)
}

export const getStaticPaths = async () => {
    // const tags = new Set(getTags().flat())
		const { tags } = getTags()

    // need to map it to put the tags inside of the {params: {slug: tag}} structure
    // this structure repeats as a list of this structure
    // need to downgrade the set to an array to use .map()
    // let paths;

    // const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));
    const paths = tags.map((tag) => ({ params: { slug: tag } }));

    return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async ({ params: { slug } }) => {
	const posts = getPosts().filter(post => post.frontmatter.tags.includes(slug))
	// const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')
	// const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
		// props: {
		// 	slug,
		// 	frontmatter: posts.map(post => post.frontmatter),
		// 	content: posts.map(post => post.content)
		// },
		props: {
			slug,
			posts
		}
  }
}

export default tag