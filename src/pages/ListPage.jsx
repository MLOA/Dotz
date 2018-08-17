import React from 'react'
import Header from '../components/Header'
import List from '../components/List'

const ListPage = ({ match }) => (
	<div>
		<Header path={match.path}>ListPage</Header>
		<List />
	</div>
)

export default ListPage
