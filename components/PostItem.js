import Link from 'next/link'
import Image from 'next/image'
import postStyles from '../styles/Post.module.css'

const PostItem = ({ 
	post: {
		frontmatter: { title, tags, stack, date, thumb, description },
		slug
	}
}) => {

	return (
		<Link href="/post/[slug]" as ={ `/post/${ slug }` }>
			<a className={ postStyles.card }>
				<div className={ postStyles.innerGrid }>
					<div className={ postStyles.image }>
						<div>

							<Image
								src={ '/public/'+thumb }
								alt='thumb'
								layout='fill'
								// width={2000}
								// height={1300}
								// placeholder='blur'
							/>
						</div>
					</div>
					<div>
						<h3>{ title }</h3>
						<h4>{ stack }</h4>
						<h5>{ date }</h5>
						{/* <p>{ description}</p> */}
						{ description.map(paragraph => <p key={ paragraph.id }>{ paragraph }</p>) }
						{/* <br /> */}
						{/* <div dangerouslySetInnerHTML={{__html: (description)}}></div> */}
						<div className={ postStyles.tags }>
							{/* Why does this line cause a 'hydration error' in react? */}
							{/* { tags.map(tag => <Link key={ tag } href={`/tags/${tag}`}>{ tag }</Link>) } */}
							{ tags.map(tag => <Link key={ tag.id } href={ `/tags/${tag}` }>{ tag }</Link>) }
						</div>
					</div>
				</div>
			</a>
		</Link>
	)
}


export default PostItem