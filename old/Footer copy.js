/* eslint-disable react/jsx-no-target-blank */
import footerStyle from '../styles/Footer.module.css'

const Footer = () => {
	return (
		<div>
			<div className={footerStyle.footer}>
				<ul>
					<li>&copy; 2022 Kyle Rozic</li>
					<li>Host: <a href="https://www.vercel.com/" target="_blank">Vercel</a></li>
					<li>Framework: <a href="https://nextjs.org/" target="_blank">Next.js</a></li>
				</ul>
			</div>
			<div className={footerStyle.footerOld}>
			<p>&copy; 2022 KYLE ROZIC &ensp;<u>|</u>&ensp; Host: <a href="https://www.vercel.com/" target="_blank">Vercel</a> &ensp;<u>|</u>&ensp; Framework: <a href="https://nextjs.org/" target="_blank">Next.js</a></p>
			</div>
		</div>
	)
}

export default Footer