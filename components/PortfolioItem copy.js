import Link from 'next/link'
import Image from 'next/image'
import postStyles from '../styles/Portfolio.module.css'

const PortfolioItem = ({ 
	post: {
		frontmatter: { title, stack, tags, thumb },
		slug
	}
}) => {

	return (
		<Link href="/post/[slug]" as ={ `/post/${ slug }` }>
			<a className={ postStyles.card }>
				<Image
					src={ '/public/'+thumb }
					alt='thumb'
					layout='responsive'
					width={502}
					height={496}
					// placeholder='blur'
				/>
				<br />
				<h3>{ title }</h3>
				<p>{ stack }</p>
				{/* <p className={postStyles.tags}>
					{tags.map(tag => <Link key={tag} href={`/tags/${tag}`}>{tag}</Link>)}
				</p> */}
			</a>
		</Link>
	)
}


export default PortfolioItem