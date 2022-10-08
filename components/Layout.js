import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Nav from './Nav'
// import Header from './Header'

const Layout = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Nav />
			<main className={styles.content}>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout