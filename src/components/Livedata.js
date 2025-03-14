import React from 'react'
import { useState, useEffect} from 'react'

export const Livedata = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch product2 data from the server
        fetch('http://localhost:3000/product2')
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product:', error));
    }, []);

    return (
        <div style={{color:"black"}}>
            <h1>Product Details</h1>
            {product ? (
                <div>
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );

}
