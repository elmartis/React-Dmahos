import React from 'react';
import '../../styles/pieces/SelectedContainer.css'
import Image from 'react-bootstrap/Image';
import ProductData from '../pieces/ProductData';

function SelectedContainer (props) {
    return (
        <div className='SelectedContainer'>
            <div className='ProductImg'>
                <Image src={props.ImgURL} alt='PastelFlores' className='FlowerCake' />
            </div>
            <ProductData />
        </div>
    )
}

export default SelectedContainer;