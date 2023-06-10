import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ForEachDiv from '../../components/ForEachDiv/ForEachDiv'
import SearchBar from '../../components/SearchBar/SearchBar'

function Products() {
	const [data, setData] = useState([])
	const [searchQuery, setSearchQuery] = useState('')

	const fetchApi = async () => {
		try {
			const response = await axios.get("https://fakestoreapi.com/products")
			setData(response.data)
		} catch (error) {
			console.log("Error: ", error)
		} finally {
			console.log('Done')
		}
	}

	useEffect(() => {
		fetchApi()
	}, [])

	const handleSearch = (query) => {
		setSearchQuery(query)
	}

	const filteredProducts = data.filter((product) =>
		product.title.toLowerCase().includes(searchQuery.toLowerCase())
)

	return (
		<div className='Products'>
			<SearchBar onData={handleSearch} />
			<div className='ForEachDiv'>
				{filteredProducts.map((data) => (
					<div key={data.id}>
						<img src={data.image} alt={data.title} />
						<p>{data.title}</p>
						<p>{data.price}</p>
					</div>))}
			</div>
		</div>
	)
}

export default Products