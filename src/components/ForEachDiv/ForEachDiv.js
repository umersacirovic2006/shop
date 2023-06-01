import React from 'react'

function ForEachDiv({ data }) {
	return (
		<div className='ForEachDiv'>
			{data.map((data) => (
				<div key={data.id}>
					<img src={data.image} alt={data.title} />
					<p>{data.title}</p>
					<p>{data.price}</p>
				</div>))}
		</div>
	)
}

export default ForEachDiv