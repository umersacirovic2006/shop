import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='Home'>
        <h1>Some nice home page</h1>
        <Link to='all-products'>
            <button>Just opens the page...</button>
        </Link>
    </div>
  )
}

export default Home