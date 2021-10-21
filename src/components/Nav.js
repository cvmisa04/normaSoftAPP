import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HomeTwoTone ,PlusSquareFilled} from '@ant-design/icons'

const Nav = () => {
 const active = window.location.pathname

    return (
        <>

            <ul className='nav nav-tabs' style={{backgroundColor:"#dedede",borderBottom:"5px solid #0099ad"}}>
                <li className='nav-item '>
                    <NavLink className={`nav-link text-dark bg-warning`} to="/"><HomeTwoTone style={{fontSize:"25px"}}/></NavLink>

                </li>
                <li className='nav-item'>
                    <NavLink className={`nav-link text-dark`} to="/create"> <PlusSquareFilled  style={{fontSize:"25px"}}/>  ADD NEW POST</NavLink>

                </li>


            </ul>
        </>
    )
}

export default Nav
