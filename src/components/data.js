import Image from 'react-bootstrap/Image';



import Hamburger from '../img/cakes/hamburgerr.png';
import Hamburger2 from '../img/cakes/hamburger2.png';

import Napolitana from '../img/cakes/napolitana3.png';
import Pizzasen from '../img/cakes/sensilla2.png';
import Vegetarian from '../img/cakes/vegetariana2.png';
import Hawaiana from '../img/cakes/hawaiana2.png';
import Chikenchamp from '../img/cakes/champiñon2.png';


import Hotdogg from '../img/cakes/hotdogg.png';


import Pepsi from '../img/cakes/pepsi.png';
import Upp from '../img/cakes/777.jpeg';
import Poker from '../img/cakes/poker.png';
import Ponymalta from '../img/cakes/Pony-Malta.png';
import Uva from '../img/cakes/uva.png';
import HIT from '../img/cakes/JUGO_HIT.png';
import Manzana from '../img/cakes/Manzana.jpg';

const data = {
    products: [
        {
            id: 'burger1',
            name: 'Hamburgesa Sencilla',
            pricesmall: 7500,
            amount: 0,
            category: 'Burger',
            Image: <Image src={Hamburger} alt='Sencilla' className='CakeImage'/>
        },
        {
            id: 'burger2',
            name: 'Hamburgesa Pollo',
            pricesmall: 8000,
            amount: 0,
            category: 'Burger',
            Image: <Image src={Hamburger} alt='Pollo' className='CakeImage'/>
        },
        {
            id: 'burger3',
            name: 'Hamburgesa Doble carne',
            pricesmall: 12000,
            amount: 0,
            category: 'Burger',
            Image: <Image src={Hamburger2} alt='Doble carne' className='CakeImage'/>
        },
        {
            id: 'burger4',
            name: 'Hamburgesa Mixto',
            pricesmall: 13000,
            amount: 0,
            category: 'Burger',
            Image: <Image src={Hamburger2} alt='Mixto' className='CakeImage'/>
        },
        
        

        {
            id: 'Pizza1',
            name: 'Pizza sencilla',
            pricesmall: 8000,
            amount: 0,
            category: 'Pizzas',
            Image: <Image src={Pizzasen} alt='Pizza' className='CakeImage'/>
        },
        {
            id: 'Pizza2',
            name: 'Pizza Napolitana',
            pricesmall: 8000,
            amount: 0,
            category: 'Pizzas',
            Image: <Image src={Napolitana} alt='Pizza' className='CakeImage'/>
        },
        {
            id: 'Pizza3',
            name: 'Pizza Vegetariana',
            pricesmall: 9500,
            amount: 0,
            category: 'Pizzas',
            Image: <Image src={Vegetarian} alt='Pizza' className='CakeImage'/>
        },
        { 
            id: 'Pizza4',
            name: 'Pizza Hawaiana',
            pricesmall: 8000,
            amount: 0,
            category: 'Pizzas',
            Image: <Image src={Hawaiana} alt='Pizza' className='CakeImage'/>
        },
        {
            id: 'Pizza5',
            name: 'Pizza Pollo y campiñon',
            pricesmall: 9500,
            amount: 0,
            category: 'Pizzas',
            Image: <Image src={Chikenchamp} alt='Pizza' className='CakeImage'/>
        },




        {
            id: 'Hotdog1',
            name: 'Perro Sencillo',
            pricesmall: 4500,
            amount: 0,
            category: 'Hotdog',
            Image: <Image src={Hotdogg} alt='Sencillo' className='CakeImage'/>
        },
        {
            id: 'Hotdog2',
            name: 'Perro Suizo',
            pricesmall: 7500,
            amount: 0,
            category: 'Hotdog',
            Image: <Image src={Hotdogg} alt='Suizo' className='CakeImage'/>
        },
        {
            id: 'Hotdog3',
            name: 'Perro Choriperro',
            pricesmall: 8000,
            amount: 0,
            category: 'Hotdog',
            Image: <Image src={Hotdogg} alt='Choriperro' className='CakeImage'/>
        },
        {
            id: 'Hotdog4',
            name: 'Perro Italiano',
            pricesmall: 10000,
            amount: 0,
            category: 'Hotdog',
            Image: <Image src={Hotdogg} alt='Italiano' className='CakeImage'/>
        },



        {
            id: 'Drink1',
            name: 'Pepsi 1,50',
            pricesmall: 3500,
            amount: 0,
            category: 'Drinks',
            Image: <Image src={Pepsi} alt='Pepsi 1,50' className='CakeImage'/>
        },
        {
            id: 'Drink2',
            name: 'Manzana',
            pricesmall: 3500,
            amount: 0,
            category: 'Drinks',
            Image: <Image src={Manzana} alt='Manzana' className='CakeImage'/>
        },
        {
            id: 'Drink3',
            name: 'Jugo git 2,5',
            pricesmall: 3800,
            amount: 0,
            category: 'Drinks',
            Image: <Image src={HIT} alt='Jugo git 2,5' className='CakeImage'/>
        },
        {
            id: 'Drink4',
            name: 'Pony malta 1ml',
            pricesmall: 2500,
            amount: 0,
            category: 'Drinks',
            Image: <Image src={Ponymalta} alt='pony malta 1ml' className='CakeImage'/>
        },
        {
            id: 'Drink5',
            name: 'cerveza poker',
            pricesmall: 3200,
            amount: 0,
            category: 'Drinks',
            Image: <Image src={Poker} alt='cerveza poker' className='CakeImage'/>
        },
        {
            id: 'Drink6',
            name: 'Uva 1,5',
            pricesmall: 3000,
            amount: 0,
            category: 'Drinks',
            Image: <Image src={Uva} alt='Uva 1,5' className='CakeImage'/>
        },
        {
            id: 'Drink7',
            name: '7up',
            pricesmall: 3500,
            amount: 0,
            category: 'Drinks',
            Image: <Image src={Upp} alt='Uva 1,5' className='CakeImage'/>
        },
    ]
}

export default data;