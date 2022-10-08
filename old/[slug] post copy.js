import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import matter from 'gray-matter'
import { marked } from 'marked'
import styles from '../../styles/Post.module.css'

const post = ({ 
	frontmatter: { title, stack, date, tags, featuredImg }, 
	slug, 
	content 
}) => {
	// const router = useRouter()
	// const {slug} = router.query
	
	return (
		<>

			<Image
				src={ '/public/'+featuredImg}
				alt='banner'
				layout='responsive'
				width={1120}
				height={250}
				// placeholder='blur'
			/>
			<h1>{title}</h1>
			<p className={styles.tags}>
				{tags.map(tag => <Link key={tag} href={`/tags/${tag}`}>{tag}</Link>)}
			</p>
			{/* <h3>{stack}</h3> */}
			<h4>{date}</h4>
			<hr className='test'></hr>
			<div>
				<div dangerouslySetInnerHTML={{__html: marked.parse(content)}}></div>
			</div>
			<br />
			<Link href='/'>Go Back</Link>
		</>
	)
}

export const getStaticPaths = async () => {
	const files = fs.readdirSync(path.join('posts'))

	const paths = files.map(filename => ({
		params: {
			slug: filename.replace('.md', '')
		},
	}))

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async ({ params: { slug } }) => {
	const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')
	const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
			slug,
			content
   }
  }
}

export default post 