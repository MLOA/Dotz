import React from 'react'
import styles from './QuizPage.scss'

import Header from '../components/Header'

const QuizPage = ({ match }) => (
	<div className={styles.root}>
		<Header path={match.path}>QuizPage</Header>
		<div className={styles.quiz}>
			afehaiufheaiuhfiuahfiuaehiufhauihfeuiahhuiehfuaihuehhfuiaehfuiahefuiheaiufhaweufhuaehfuiawehfuiaehfuiaehfuiawhfuihaeuifhauwihfuaiehufwaihufahfiuahfiualhfiuaehfluiawhelfiuh
		</div>
		<div className={styles.answer}>
			<p>AAAAAAAAA</p>
			<p>AAABBBBBBBBBBBBBA</p>
			<p>AAAACCCCAAAAA</p>
			<p>AAADDAAA</p>
		</div>
	</div>
)

export default QuizPage
