import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.scss'

const Header = ({ path, children }) => (
	<header className={styles.root}>
		<h2>
			{children}
			{path !== '/' ? <Link to="/"> top </Link> : null}
			{path !== '/quiz' ? <Link to="/quiz"> quiz </Link> : null}
			{path !== '/list' ? <Link to="/list"> list </Link> : null}
		</h2>
	</header>
)

export default Header
