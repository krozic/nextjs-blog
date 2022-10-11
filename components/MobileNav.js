import Link from 'next/link'
// import navStyles from '../styles/Nav.module.css'
import { useState } from 'react'
import styled from 'styled-components'

const StyledBurger = styled.div`
	/* display: none;
	@media (max-width: 850px) {
		display: block;
	} */

	button {
		z-index: 100;
		position: absolute;
		top: 30px;
		right: 35px;
		display: block;
		width: 35px;
		cursor: pointer;

		appearance: none;
		background: none;
		outline: none;
		border: none;
	}

	div, button:after, button:before {
		position: block;
		top: 30px;
		right: 30px;
		content: '';
		display: block;
		width: 2.2rem;
		height: 5px;
		background-color: white;
		border-radius: 4px;
		margin: 6px;
		transition: 0.4s ease-in-out;
	}

	button:before {
		/* transform: ${({ open }) => open ? 'translate(0, 0) rotate(0)' : 'translate(0px, 11px) rotate(-225deg)'}; */
		transform: ${({ open }) => open ? 'translate(0px, 11px) rotate(-225deg)' : 'translate(0, 0) rotate(0)'};
	}

	button:after {
		/* transform: ${({ open }) => open ? 'translate(0, 0) rotate(0)' : 'translate(0px, -11px) rotate(225deg)'}; */
		transform: ${({ open }) => open ?  'translate(0px, -11px) rotate(225deg)' : 'translate(0, 0) rotate(0)'};
	}

	div {
		/* opacity: ${({ open }) => open ? '1' : '0'}; */
		opacity: ${({ open }) => open ? '0' : '1'};
		// transform: ${({ open }) => open ? 'translate(0)' : 'translate(-15px)'}
		/* transform: rotate(360deg) */
	}
`;

const NavOverlay = styled.div`
	nav {
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		/* left: ${({ open }) => open ? '100%' : '0%'}; */
		left: ${({ open }) => open ? '0%' : '100%'};
		/* opacity: ${({ open }) => open ? '0%' : '100%'}; */
		opacity: ${({ open }) => open ? '100%' : '0%'};
		/* z-index: ${({ open }) => open ? '0' : '98'}; */
		z-index: 98;
		width: 100%;
		min-height: 100vh;
		/* background-color: #12002F; */
		/* background-color: rgba(37, 12, 121, 0.816); */
		/* background-color: rgba(29, 21, 76, 1); */
		background: radial-gradient(at top left, #2a274b 0%, #0c0c17 70%);
		padding-top: 8rem;
		transition: 0.4s;
	}

	a {
		display: block;
		width: 100%;
		max-width: 15rem;
		margin: 0 auto 16px;
		text-align: center;
		margin-bottom: 1rem;
		padding: 0.5rem;
		/* background-color: purple; */
		border-radius: 0.5rem;
		background: #1a80bf;
		box-shadow: inset 3px 3px 15px #5ac0ff;
		transition: 0.3s;
	}

	a:hover {
		filter: none;
		background: #1a80bf;
		box-shadow: inset 1px 1px 9px #002e4a;
		filter:brightness(1.1);
	}
`;


const MobileNav = () => {
	const [open, setOpen] = useState(false);

	return (
		// <nav className={ navStyles.mobileNav }>
		<nav>
			<StyledBurger open={open} onClick={() => setOpen(!open)}>
				<button>
					<div></div>
				</button>
			</StyledBurger>
			<NavOverlay open={open} onClick={() => setOpen(!open)}>
				<nav>
					<Link href='/' >Home</Link>
					<Link href='/about'>About</Link>
					<Link href='/projects'>Portfolio Projects</Link>
					<Link href='/projects/all-projects'>All Projects</Link>
					<Link href='/tags'>Tags</Link>
				</nav>
			</NavOverlay>
		</nav>
	)
}

export default MobileNav