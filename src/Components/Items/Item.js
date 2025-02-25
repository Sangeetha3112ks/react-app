import React from 'react';
import './Item.css';
import HeartIcon from '../HeartIcon/HeartIcon';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className='item1'>
            <div className="item-image-container">
                <Link to={`/product/${props.id}/${props.type}`}>
                    <img src={props.image} alt="" />
                </Link>
                <HeartIcon />
            </div>
            <p>{props.name}</p>
            <div className='item-price'>
                <div className='item-price-new'>
                    ${props.new_price}
                </div>
                <div className='item-price-old'>
                    ${props.old_price}
                </div>
            </div>
        </div>
    );
};

export default Item;