import React from 'react'
import { Nav } from 'react-bootstrap';

const HeaderAdmin = () => {
    return (
        <div className='headerAdmin'>
            <Nav.Link className='odkaz' href='/admin/objednavky' >Objedvávky</Nav.Link>
            <Nav.Link className='odkaz' href='/admin/restaurace' >Spravovat restaurace</Nav.Link>
        </div>
    )
}

export default HeaderAdmin