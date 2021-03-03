import React from 'react';
import '../../styles/pieces/BgVector.css';
import Image from 'react-bootstrap/Image'
import VectorBg from '../../img/found2.jpg';

function BgVector () {
    return (
        <div className='ImageContainer'>
            <Image src={VectorBg} alt='Vector' className='VectorBg'/>
        </div>
    )
}

export default BgVector;