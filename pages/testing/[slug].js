// import fs from 'fs'
// import path from 'path'
// import Link from 'next/link'
// import Image from 'next/image'
// import { useRouter } from 'next/router'
// import matter from 'gray-matter'
// import { marked } from 'marked'
import { getTags, getPosts } from '/src/api.js'

const testing = ({ props }) => {
	// frontmatter: { title, stack, date, featuredImg }, 
	// slug, 
	// content 

	// const router = useRouter()
	// const {slug} = router.query
	
	return (
		<>
		</>
	)
}

export const getStaticPaths = async () => {
	const tags = new Set(getTags().flat())
	const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }))

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async ({ params: { slug } }) => {
	// const posts = getPosts().filter(post => post.frontmatter.tags.includes(slug))
	// const { frontmatter, content } = posts

	// console.log(getPosts().filter(post => post.frontmatter.tags.includes(slug)))
	// console.log(slug)
	// // console.log(posts[0].frontmatter)
	// console.log(frontmatter)

  return {
		// props: {
		// 	posts[0],
		// },
  //   props: {
	// 		slug,
	// 		content
  //  }
	props: []
  }
}

export default testing