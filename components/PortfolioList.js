import PortfolioItem from './PortfolioItem'
import postStyles from '../styles/Portfolio.module.css'

const PortfolioList = ({ posts }) => {
	return (
		<div className={ postStyles.grid }>
      { posts.map((post) => (
				<PortfolioItem key={ post.id } post={ post } />
      ))}
		</div>
	)
}

export default PortfolioList
