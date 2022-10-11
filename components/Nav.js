import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import { useState } from 'react'
import MobileNav from './MobileNav'

const Nav = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className={ navStyles.nav }>
			<h2><Link href='/' >{ process.env.title }</Link></h2>
			<div className={ navStyles.links }>
				<Link href='/'>Home</Link>
				<Link href='/about'>About</Link>
				<Link href='/projects'>Portfolio Projects</Link>
				<Link href='/projects/all-projects'>All Projects</Link>
				<Link href='/tags'>Tags</Link>
			</div>
			<MobileNav />
		</div>
	)
}

export default Nav