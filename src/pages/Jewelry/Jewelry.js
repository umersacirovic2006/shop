import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ForEachDiv from '../../components/ForEachDiv/ForEachDiv'

function Jewelry() {
	const [data, setData] = useState([])

	const fetchApi = async () => {
		try {
			const response = await axios.get('https://fakestoreapi.com/products/category/jewelery')
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
		<div className='Jewelry'>
			<ForEachDiv data={data} />
		</div>
	)
}

export default Jewelry