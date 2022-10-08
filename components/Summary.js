import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Summary.module.css'

const Summary = () => {
	return (
		<div className={styles.summary}>
				<div>
          <h2>Data</h2>
          <h3>Engineering & Analytics</h3>
          <p>Data analyst & app developer based in Ontario, Canada</p>
          {/* <Link className={styles.btn} href="/projects"> */}
          <Link href="/projects">
						<a className={styles.btn}>My Portfolio Projects</a>
					</Link>
        </div>
        <div className={ styles.nextImage }>
					<Image
						src='/../public/images/banner/banner-eng.png'
						alt='banner'
						layout='responsive'
						width={1600}
						height={1600}
						// placeholder='blur'
					/>
        </div>
        {/* <div className={card}>
          <img src='/banner-eng.png' alt='banner'></img>
          <div className={img_top}>
            <img src='/banner-eng-blur.png' class="img-top" alt='banner-blur'></img>
          </div>
        </div> */}
          {/* <img src='/banner-eng.png' alt='banner'></img> */}
		</div>
	)
}

export default Summary