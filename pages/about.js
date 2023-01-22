/* eslint-disable react/jsx-no-target-blank */
import styles from '../styles/About.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const about = () => {
	return (
		<div className={ styles.about }>
			<div className={ styles.aboutGrid }>
				<h1>About Me</h1>
				<p>Hey there! I&apos;m a data programmer with a background in chemistry. My personal journey towards programming and data engineering began when I was working as a chemist in an analytical quality lab. I found that I thoroughly enjoyed the process of working with data and identifying patterns and insights, but I soon realized that I could accomplish more if I used my programming and IT skills to scale these efforts.</p>
				<p>After taking online courses in Machine Learning and Data Science, I started working on projects that I hoped may help me to learn more about some of my interests while also advancing and honing my skills in this field. Working on  projects like these are highly rewarding and the challenges they present can truly push learning to new heights.</p>
				<p>Currently, the primary technologies I&apos;m using are <Link href='/tags/Python'>Python</Link> and <Link href='/tags/SQL'>SQL</Link> for data handling/manipulation, <Link href='/tags/SQL'>SQL Server</Link>, <Link href='/tags/AWS'>AWS</Link>, and <Link href='/tags/GCP'>GCP</Link> for data storage, as well as <Link href='/tags/Airflow'>Airflow</Link> and/or cloud services for scheduling tasks. I am excited to continue my career in data and am always looking for opportunities to learn and grow. If you would like to discuss potential collaborations or job opportunities, please contact me through <a href='https://www.linkedin.com/in/kyle-rozic-651a0794/' target='_blank'>LinkedIn</a>.</p>
			</div>
			<div className={ styles.linksGrid }>
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