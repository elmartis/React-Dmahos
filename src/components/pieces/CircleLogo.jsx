import React from 'react';
import '../../styles/pieces/CircleLogo.css';
import Image from 'react-bootstrap/Image'
import LogoDmahos from '../../img/logo-remove.png';

function CircleLogo () {
    return (
        <div className='HalfCircle'>
            <Image src={LogoDmahos} alt='dmh' className='logoDmahos' roundedCircle />
        </div>
    )
}

export default CircleLogo;