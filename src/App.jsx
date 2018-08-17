import React from 'react'
import { Route } from 'react-router-dom'

import TopPage from './pages/TopPage'
import ListPage from './pages/ListPage'
import QuizPage from './pages/QuizPage'
import styles from './App.scss'

const App = () => (
	<div className={styles.root}>
		<Route exact path="/" component={TopPage} />
		<Route path="/quiz" component={QuizPage} />
		<Route path="/list" component={ListPage} />
	</div>
)

export default App
