import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'
import matter from 'gray-matter'
import { marked } from 'marked'
import styles from '../../styles/Post.module.css'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import YouTube from '/components/youTube'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark.css'
import markdownStyle from '/styles/Markdown.module.css'
import { getSlugs } from '/src/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faTag } from '@fortawesome/free-solid-svg-icons'

const post = ({ 
	frontmatter: { title, stack, date, tags, featuredImg, links }, 
	slug, 
	content,
	mdxSource
}) => {
	
	return (
		<div className={ markdownStyle.body}>
			<div className={ markdownStyle.box }>
				<h1>{ title }</h1>
				<h3>{ date }</h3>
				<div className={ markdownStyle.tags }>
					{/* <li className={ markdownStyle.label }><FontAwesomeIcon icon={ faTag } className='hover:text-gray'/></li> */}
					{/* <p className={ markdownStyle.tags }> */}
					<li>
						{ tags.map(tag => <Link key={ tag } href={ `/tags/${tag}` }>{ tag }</Link>) }
					</li>
				</div>
				<p className={ markdownStyle.sites }>
					{ Object.keys(links).map(site => <Link key={ site } href={ links[site] }>{ `${site} ` }</Link>) }
					{/* { Object.keys(links).map(site => <Link key='' href={ links[site] }>{ `View ${site}` }</Link>) } */}
				</p>
				{/* <hr className='test'></hr> */}
			</div>
			<div className={ markdownStyle.image }>
				<Image
					src={ '/public/'+featuredImg }
					alt='banner'
					layout='fill'
					// layout='responsive'
					// width={2000}
					// height={1300}
					// placeholder='blur'
				/>
			</div>
			{/* <h3>{stack}</h3> */}
			{/* <br /> */}
			<div className={ markdownStyle.markdown }>
				<MDXRemote {...mdxSource} components={{YouTube, Image}} />
				{/* <hr/>
				<div dangerouslySetInnerHTML={{__html: marked.parse(content)}}></div> */}
			</div>
			<br />
			{/* <Link href='/'>Go Back</Link> */}
		</div>
	)
}

export const getStaticPaths = async () => {
	// const files = fs.readdirSync(path.join('posts'))
	const files = getSlugs()

	const paths = files.map(filename => ({
		params: {
			// slug: filename.replace('.mdx', '')
			slug: filename
		},
	}))

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async ({ params: { slug } }) => {
	const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8')
	const { data: frontmatter, content } = matter(markdownWithMeta)
	const mdxSource = await serialize(content, {
		mdxOptions: {
			rehypePlugins: [
				rehypeSlug,
				[rehypeAutolinkHeadings, { behavior: 'wrap' }],
				rehypeHighlight,
			]
		}
	})

  return {
    props: {
      frontmatter,
			slug,
			content,
			mdxSource
   }
  }
}

export default post 