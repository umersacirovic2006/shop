import React from 'react'
import Women from '../Women/Women'
import Men from '../Men/Men'
import Jewelry from '../Jewelry/Jewelry'
import Electronics from '../Electronics/Electronics'
import ProductDiv from '../../components/ProductDiv/ProductDiv'

function Products() {
	return (
		<div className='Products'>
			<ProductDiv text="Women's section" element={<Women />} />
			<ProductDiv text="Men's section" element={<Men />} />
			<ProductDiv text="Jewelry section" element={<Jewelry />} />
			<ProductDiv text="Electronics section" element={<Electronics />} />
		</div>
	)
}

export default Products