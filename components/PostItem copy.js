import Link from 'next/link'
import Image from 'next/image'
import postStyles from '../styles/Post.module.css'

const PostItem = ({ 
	post: {
		frontmatter: { title, stack, thumb, description },
		slug
	}
}) => {

	return (
		<Link href="/post/[slug]" as ={ `/post/${ slug }` }>
			<a className={ postStyles.card }>
				<div className={ postStyles.innerGrid }>
					<div>
						<Image
							src={ '/public/'+thumb }
							alt='thumb'
							layout='responsive'
							width={502}
							height={496}
							// placeholder='blur'
						/>
					</div>
					<div>
						<h3>{ title }</h3>
						<h4>{ stack }</h4>
						<p>{ description}</p>
					</div>
				</div>
			</a>
		</Link>
	)
}


export default PostItem