import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import clothData from '../ClothProducts';
import dataproduct from '../AccessoriesProduct';
import bestProducts from '../Components/images/best_img';
import featuredProducts from '../Components/images/featured_img';
import './BuyNow.css';

const BuyNow = () => {
    const { type, id, selectedSize } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        let productData;

        if (type === 'best') {
            productData = bestProducts;
        } else if (type === 'featured') {
            productData = featuredProducts;
        } else if (clothData[type]) {
            productData = clothData[type];
        } else if (dataproduct[type]) {
            productData = dataproduct[type];
        }

        const foundProduct = productData?.find((p) => p.id === parseInt(id));

        setProduct(foundProduct);
    }, [id, type]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="buy-now-page">
            <div className="buy-now-product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="buy-now-product-details">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.new_price}</p>
                <p>Size: {selectedSize}</p>
                <button>Proceed</button>
            </div>
        </div>
    );
};

export default BuyNow;