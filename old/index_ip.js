import Link from 'next/Link'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import ArticleList from '../components/PostList'

export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>WebDev Newz</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}



import Layout from '../components/Layout'
import { header, btn, categories, catlink, technologies, logos, card, img_top } from '../styles/home.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data)
  const image = getImage(data.banner.childImageSharp.gatsbyImageData)
  // const image_blur = getImage(data.banner_blur.childImageSharp.gatsbyImageData)

  return (
		<section className={header}>
			<div>
				<h2>Data</h2>
				<h3>Engineering & Analytics</h3>
				<p>Data analyst & app developer based in Ontario, Canada</p>
				<Link className={btn} to="/projects">My Portfolio Projects</Link>
			</div>
			{/* <div className={card}>
				<img src='/banner-eng.png' alt='banner'></img>
				<div className={img_top}>
					<img src='/banner-eng-blur.png' class="img-top" alt='banner-blur'></img>
				</div>
			</div> */}
			<div>
				<GatsbyImage image={image} alt="banner" />
			</div>
		</section>
		{/* <div className={categories}> <h2>Categories</h2>
			<p><Link className={catlink} to="/projects">Data Engineering</Link> &emsp; <Link className={catlink} to="/projects">Data Analysis</Link> &emsp; <Link className={catlink} to="/projects">Machine Learning</Link></p>
		</div> */}
		<div className={technologies}>
			<h2>Project Technologies</h2>
			<br></br>
			<div className={logos}>
				<ul>
					<li><a href="#JavaScript"><img src="/JavaScript.png" alt="JavaScript" title="JavaScript" /></a></li>
					<li><a href="#React"><img src="/React.svg" alt="React" title="React" /></a></li>
					<li><a href="#AWS"><img src="/AWS.svg" alt="AWS" /></a></li>
					<li><a href="#Python"><img src="/Python_Fix.svg" alt="Python" /></a></li>
					<li><a href="#home"><img src="/R.svg" alt="R" /></a></li>
					<li><a href="#home"><img src="/GCP_Cloud.svg" alt="GCP" /></a></li>
					<li><a href="#home"><img src="/SQL2.png" alt="SQL2" /></a></li>
					<li><a href="#home"><img src="/Tableau.svg" alt="Tableau" /></a></li>
					<li><a href="#home"><img src="/Airflow.png" alt="Airflow" /></a></li>
					<li><a href="#home"><img src="/Excel.svg" alt="Excel" /></a></li>
					<li><a href="#home"><img src="/GraphQL.svg" alt="GraphQL" /></a></li>
				</ul>
			</div>
		</div>
    )
}