import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='container-fluid bg-info p-4 text-left text-secondary' style={{borderBottom:"5px solid #0099ad"}}>
      <Link className='txt' style={{textDecoration:"none"}} to='/'> <h1 className='text-muted'>NormaSoft APP</h1></Link>

    </div>
    )
}

export default Header
