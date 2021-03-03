import React from 'react';
import '../../styles/mainViews/Description.css';
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";

import FlowerCake from '../../img/cakes/pastelFlores.jpg'; 

import SocialMedia from '../pieces/SocialMedia';
import CircleLogo from '../pieces/CircleLogo';
import BackButton from '../pieces/BackButton';
import BgVector from '../pieces/BgVector';
import TitleDescription from '../pieces/TitleDescription';
import ProductPrice from '../pieces/ProductPrice';

function Description () {
    return (
        <div className='HomeContainer'>

            <BgVector />
            
            <div className='Rectangle'>

                <CircleLogo />
                
                <TitleDescription Title='Descripción del producto'/>

                <div className='DescriptionContainer'>
                    <Image src={FlowerCake} alt='Pastel Ibague' className='ImgProduct' roundedCircle/>
                    <h1 className='ProductTitle'>Torta personalizada</h1>
                    <p className='DescriptionText'>
                        fgh fh k yf hgfhg fjgfd jgfdjf jgfdg trd gfc gctr gf g  fxgfgxfx h 
                        cgcj g jhc  jgc j cgtrc jgfcjgfcx  fxcj fcjtcj gcjgcjgc jf fx xjf
                        hgc hgcgc gc hj hf ytrditiv fctufx  xrux uf jg vjgfc gxtufx 
                    </p>
                    <ProductPrice />
                </div>
                
                <SocialMedia />

                <Link to="/MenuCake" className='LinkMenu'>
                    <BackButton Text='Regresar' />
                </Link>
            </div>
        </div>
    )
}

export default Description;