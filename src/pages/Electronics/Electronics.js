import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ForEachDiv from '../../components/ForEachDiv/ForEachDiv'

function Electronics() {
	const [data, setData] = useState([])

	const fetchApi = async () => {
		try {
			const response = await axios.get('https://fakestoreapi.com/products/category/electronics')
			setData(response.data)
		} catch (error) {
			console.log("Error: ", error)
		} finally {
			console.log('Done')
		}
	}

	console.log(data)

	useEffect(() => {
		fetchApi()
	}, [])

	return (
		<div className='Electronics'>
			<ForEachDiv data={data} />
		</div>
	)
}

export default Electronics