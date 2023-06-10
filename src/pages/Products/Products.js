import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ForEachDiv from '../../components/ForEachDiv/ForEachDiv'
import SearchBar from '../../components/SearchBar/SearchBar'

function Products() {
	const [data, setData] = useState([])
	const [searchQuery, setSearchQuery] = useState('')
	const [loading, setLoading] = useState(false)

	const hstyle = {
		textAlign: "center",
		marginTop: '100px'
	}

	const fetchApi = async () => {
		try {
			setLoading(true)
			const response = await axios.get("https://fakestoreapi.com/products")
			setData(response.data)
			setLoading(false)
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
		<div>
			{loading ? <h1 style={hstyle}>Loading...</h1> : <div className='Products'>
				<SearchBar onData={handleSearch} />
				<div className='ForEachDiv'>
					{filteredProducts.map((data) => (
						<div key={data.id}>
							<img src={data.image} alt={data.title} />
							<p>{data.title}</p>
							<p>{data.price}</p>
						</div>))}
				</div>
			</div>}
		</div>
	)
}

export default Products