import Link from 'next/Link'
import {useRouter} from 'next/router'

const post = ({ post }) => {
	const router = useRouter()
	const {id} = router.query
	
	return (
		<>
			<h1>{post.frontmatter.title}</h1>
			<p>{post.frontmatter.body}</p>
			<br />
			<Link href='/'>Go Back</Link>
		</>
	)
}

export const getStaticProps = async (context) => {
	// const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

	// const article = await res.json()

	return {
		props: {
			article 
		}
	}
}

export const getStaticPaths = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

	const articles = await res.json()

	const ids = articles.map(article => article.id)

	const paths = ids.map(id => ({params: {id: id.toString()}}))

	return {
		paths,
		fallback: false
	}
}

export default post 