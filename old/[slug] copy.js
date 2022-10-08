import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import matter from 'gray-matter'
import { marked } from 'marked'
import { getTags2 } from '/src/api.js'

const tags = ({ 
	frontmatter: { title, stack, date, featuredImg }, 
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
			<h3>{stack}</h3>
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

	function getTags(filename) {
		const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
		const { data: frontmatter } = matter(markdownWithMeta)
		const tags = frontmatter.tags

		return tags
	}

	const files = fs.readdirSync(path.join('posts'))
	const tags = new Set(files.map(filename => getTags(filename)).flat());
	const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));
	console.log(tags)
	const tags2 = getTags2()
	console.log(tags2)

	// console.log(paths)


	// console.log(paths)
	return {
		paths: [],
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

export default tags
	// {
	// 	params: {
	// 		slug: filename.replace('.md', '')
	// 	},
	// }