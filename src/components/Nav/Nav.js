import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
	const parastyle = {
		color: 'white',
		textDecoration: 'none'
	}

	return (
		<div className='Nav'>
			<div className='logo'>
				<h1>Umer</h1>
			</div>
			<div className='links'>
				<NavLink style={parastyle} to='all-products'>
					<p style={parastyle}>Products</p>
				</NavLink>
				<NavLink style={parastyle} to='women'>
					<p style={parastyle}>Women</p>
				</NavLink>
				<NavLink style={parastyle} to='men'>
					<p style={parastyle}>Men</p>
				</NavLink>
				<NavLink style={parastyle} to='jewelry'>
					<p style={parastyle}>Jewelry</p>
				</NavLink>
				<NavLink style={parastyle} to='electronics'>
					<p style={parastyle}>Electronics</p>
				</NavLink>
			</div>
		</div>
	)
}

export default Nav