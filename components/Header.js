import headerStyles from '../styles/Header.module.css'

const Header = () => {
	return (
		<div>
			<h1 className={headerStyles.title}>
				<span>Kyle</span> Rozic
			</h1>
			<p className={headerStyles.description}>
				Data engineering and data analytics.
			</p>
		</div>
		
	)
}

export default Header