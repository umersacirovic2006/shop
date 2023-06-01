import React from 'react'

function ProductDiv({ text, element }) {
	return (
		<div className='ProductDiv'>
			<h2>{text}</h2>
			{element}
		</div>
	)
}

export default ProductDiv