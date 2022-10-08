/* eslint-disable react/jsx-no-target-blank */
import footerStyle from '../styles/Footer.module.css'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
	return (
		<div>
			<div className={ footerStyle.footer }>
				<div className={ footerStyle.links }>
					<a href='https://github.com/krozic' target='_blank'><FontAwesomeIcon icon={ faGithub } className='hover:text-gray'/></a>
					<a href='https://www.linkedin.com/in/kyle-rozic-651a0794/' target='_blank'><FontAwesomeIcon icon={ faLinkedin } className={ footerStyle.fa }/></a>
				</div>
				<ul>
					<li>&copy; 2022 Kyle Rozic</li>
					<li>Host: <a href="https://www.vercel.com/" target="_blank">Vercel</a></li>
					<li>Framework: <a href="https://nextjs.org/" target="_blank">Next.js</a></li>
				</ul>
			</div>
		</div>
	)
}

export default Footer