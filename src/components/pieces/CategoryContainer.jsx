import React from 'react';
import '../../styles/pieces/CategoryContainer.css';

import CategoryCircle from '../pieces/CategoryCircle';

import Pizza from '../../img/icons/pizza.png';
import Burger from '../../img/icons/burger.png';
import hotdog from '../../img/icons/hot-dog.png';
import Drinks from '../../img/icons/bebidas.png';

function CategoryContainer (props) {
    return (
        <div className='CategoryContainer'>
            <div className='LinkCategory'>
                <CategoryCircle PropFunction={props.Pizzas} ImgURL={Pizza}/>
            </div>

            <div className='LinkCategory'>
                <CategoryCircle PropFunction={props.Burger} ImgURL={Burger}/>
            </div>

            <div className='LinkCategory'>
                <CategoryCircle PropFunction={props.Hotdog} ImgURL={hotdog}/>
            </div>

            <div className='LinkCategory'>
                <CategoryCircle PropFunction={props.Drinks} ImgURL={Drinks}/>
            </div>
            
        </div>
    )
}

export default CategoryContainer;