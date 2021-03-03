import React from 'react';
import Image from 'react-bootstrap/Image'
import FoundPIZZA from '../../img/cakes/pizzaback.jpeg';
import '../../styles/mainViews/Home.css';
import { Link } from "react-router-dom";

import BgVector from '../pieces/BgVector';
import SocialMedia from '../pieces/SocialMedia';
import CircleLogo from '../pieces/CircleLogo';
import BackButton from '../pieces/BackButton';

function Home () {
    return (
        <div className='HomeContainer'>
            <BgVector />
            <div className='RectangleHome'>
                <CircleLogo />
                <div className='Container'>
                    <Image src={FoundPIZZA} alt='FounDmahos' className='imagenefound'/>
                </div>
                <SocialMedia />

                <Link to="/Menu" className='LinkMenu'>
                    <BackButton Text='Explorar' />
                </Link>
                
            </div>
        </div>
    )
}

export default Home;