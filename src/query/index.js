import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import SearchBar from '../components/SearchBar/SearchBar'

const fetchData = async () => {
	const response = await axios.get("https://fakestoreapi.com/products")
	const data = response.data
	return data
}

function ReactQuery() {
	const { data, isLoading, isError, error } = useQuery('products', fetchData)
	const [searchQuery, setSearchQuery] = useState('')

	const handleSearch = (query) => {
		setSearchQuery(query)
	}
	
	const filteredProducts = data && data.filter((product) =>
		product.title.toLowerCase().includes(searchQuery.toLowerCase())
	)

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (isError) {
		return <div>Error: {error.message}</div>
	}

	return (
		<div>
			<h1>Product List</h1>
			<SearchBar onData={handleSearch} />
			<div className='ForEachDiv'>
				{filteredProducts.map((data) => (
					<div key={data.id}>
						<img src={data.image} alt={data.title} />
						<p>{data.title}</p>
						<button>{data.price}</button>
					</div>))}
			</div>
		</div>
	)
}

export default ReactQuery