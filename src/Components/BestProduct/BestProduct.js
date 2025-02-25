import React from 'react'
import './BestProduct.css'
import data_bp from '../images/best_img'
import Item from '../Items/Item'

const BestProduct = () => {
    return (
        <div className='bestproduct'>
            <h1>BEST PRODUCTS</h1>
            <hr />
            <div className='best-item'>
                {data_bp.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} type="best"/>
                })}
            </div>
        </div>
    )
}

export default BestProduct;