import React from 'react'
import Header from '../components/Header'

const TopPage = ({ match }) => (
	<div>
		<Header path={match.path}>TopPage</Header>
		<div>This is Top Page</div>
	</div>
)

export default TopPage
