import React from 'react'
import './FeaturedProduct.css'
import data_fp from '../images/featured_img'
import Item from '../Items/Item'

const FeaturedProduct = () => {
    return (
        <div className='featured'>
            <h1>FEATURED PRODUCTS</h1>
            <hr />
            <div className='featured-item'>
                {data_fp.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} type="featured"/>
                })}
            </div>
        </div>
    )
}

export default FeaturedProduct;