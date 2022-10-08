import Link from 'next/link'
import { getTags } from '/src/api'
import styles from '../../styles/Tags.module.css'

const tags = ({ tags, count }) => {
	return (
		// <div className={ styles.header }>
		<div>
			<h1>All Tags</h1>
			<hr className='test'></hr>
			<div className={styles.container}>
				<div className={styles.tags}>
					{ tags.map(tag => {
						return <p key={ tag.id }><Link href={`/tags/${tag}`} key={ tag.id }>{ tag }</Link><span>{ count[tag] }</span></p>
						// return <li><Link href={`/tags/${tag}`} key={ tag.id }>{ tag }</Link><span>{ count[tag] }</span></li>
					}) }
				</div>
			</div>
			<br />
    </div>
	)
}


export const getStaticProps = async () => {
	// const tags = Array.from(new Set(getTags().flat()))
	const { tags, count } = getTags()

  return {
		props: {
			tags,
			count
		}
  }
}

export default tags