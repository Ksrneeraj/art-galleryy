import React from 'react';

export default function AddToCart({ image, handleAddToCart }) {
    console.log("Image URL:", image); // Log the image URL to the console

    return (
        <div>
            {/* Display selected image */}
            <img src={image} alt="Selected product" style={{ display: 'block', width: '100%' }} />
            {/* Display Buy now button */}
            <div className="text-center">
                <button className="btn btn-outline-dark mt-auto" onClick={() => handleAddToCart(image)}>Buy now</button>
            </div>
        </div>
    );
}
