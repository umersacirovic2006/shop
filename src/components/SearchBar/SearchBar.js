import React from 'react'

function SearchBar({ onData }) {
	const inputHandler = (e) => {
		const search = e.target.value
		onData(search)
	}

	return (
		<div className='SearchBar'>
			<input type='text' placeholder='Search...' onChange={inputHandler} />
		</div>
	)
}

export default SearchBar