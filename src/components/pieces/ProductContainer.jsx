import React from 'react';
import '../../styles/pieces/ProductContainer.css';
import '../../styles/pieces/CategoryPrice.css';


function ProductContainer (props) {

    const { product, onAdd, onRemove } = props;

    return (
        <div className='LinkDescription'>
            <div className='ProductContainer'>
                <div className='ProductNameContainer'>
                    <h3 className='ProductName'>{product.name}</h3>
                </div >
                <div className='ProductImage' >
                    {product.Image}
                </div>
                    
                <div className='ProductPriceContainer' >
                    <div className='ContainerPrice'>
                        <p className='ProductPrice'>${product.pricesmall}</p>
                        <div className='ContainerCounter'>
                            <button className='PlusCounter' onClick={() => onRemove(product)}>-</button>
                            <div className='CircleCounter'>
                                <p className='NumberCounter'>{props.counter}</p>
                            </div>
                            <button className='MinusCounter' onClick={() => onAdd(product)}>+</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ProductContainer;