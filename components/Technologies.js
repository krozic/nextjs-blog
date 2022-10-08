import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Technologies.module.css'

const Technologies = () => {
	return (
		<div className={styles.technologies}>
			<h2><Link href='/tags'>Project Technologies</Link></h2>
			<br></br>
			<div className={styles.logos}>
				<ul>
					<li><Link href="/tags/JavaScript"><a><img src="/images/technologies/JavaScript.png" alt="JavaScript" title="JavaScript" /></a></Link></li>
					<li><Link href="/tags/React"><a><img src="/images/technologies/React.svg" alt="React" title="React" /></a></Link></li>
					<li><Link href="/tags/AWS"><a><img src="/images/technologies/AWS.svg" alt="AWS" /></a></Link></li>
					<li><Link href="/tags/Python"><a><img src="/images/technologies/Python_Fix.svg" alt="Python" /></a></Link></li>
					<li><Link href="/tags/R"><a><img src="/images/technologies/R.svg" alt="R" /></a></Link></li>
					<li><Link href="/tags/GCP"><a><img src="/images/technologies/GCP_Cloud.svg" alt="GCP" /></a></Link></li>
					<li><Link href="/tags/SQL"><a><img src="/images/technologies/SQL2.png" alt="SQL2" /></a></Link></li>
					<li><Link href="/tags/Tableau"><a><img src="/images/technologies/Tableau.svg" alt="Tableau" /></a></Link></li>
					<li><Link href="/tags/Airflow"><a><img src="/images/technologies/Airflow.png" alt="Airflow" /></a></Link></li>
					<li><Link href="/tags/Excel"><a><img src="/images/technologies/Excel.svg" alt="Excel" /></a></Link></li>
					<li><Link href="/tags/NextJS"><a><img src="/images/technologies/NextJS_text.svg" alt="NextJS" /></a></Link></li>
				</ul>
			</div>
		</div>
	)
}

export default Technologies