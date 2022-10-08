import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
	return (
		<div className={navStyles.nav}>
			{/* <h2>Kyle Rozic</h2> */}
			<h2><Link href='/' >{process.env.title}</Link></h2>
			<div className={navStyles.links}>
				<Link href='/'>Home</Link>
				<Link href='/about'>About</Link>
				<Link href='/projects'>Portfolio Projects</Link>
				<Link href='/projects/all-projects'>All Projects</Link>
				<Link href='/tags'>Tags</Link>
			</div>
		</div>
	)
}

export default Nav