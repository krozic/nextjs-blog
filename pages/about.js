/* eslint-disable react/jsx-no-target-blank */
import styles from '../styles/About.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const about = () => {
	return (
		<div className={ styles.about }>
			<div>
				<h1>About</h1>
				<p>Data Analyst with experience visualizing and curating user data to increase company product success. Proficient in the exploration and analysis of large datasets to extract actionable insights. Superior ability to prioritize and communicate information to a range of teams, from technical teams to account managers.</p>
			</div>
			<div>
				<h1>External Links</h1>
				<div className={ styles.links }>
					<li><a href='https://github.com/krozic' target='_blank'><FontAwesomeIcon icon={ faGithub } /><text>Github</text></a></li>
					<li><a href='https://www.linkedin.com/in/kyle-rozic-651a0794/' target='_blank'><FontAwesomeIcon icon={ faLinkedin } /><text>LinkedIn</text></a></li>
				</div>
			</div>
		</div>
	)
}

export default about