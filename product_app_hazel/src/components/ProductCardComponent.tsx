// ProductCardComponent.tsx
import React, { useState } from 'react';
import './ProductCardComponent.css';

type ProductCardProps = {
    name: string;
    img: string;
    productDesc: string;
    price: string; 
    rating: number;
    onAddToCart: (quantity: number) => void;
};

const ProductCardComponent: React.FC<ProductCardProps> = ({
    name,
    img,
    productDesc,
    price,
    rating,
    onAddToCart,
}) => {
    const [quantity, setQuantity] = useState(0);

    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, '')); // Extract number from string
    const total = (numericPrice * quantity).toFixed(2); // Round to 2 decimal places

    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value);
        if (!isNaN(val) && val >= 0) {
            setQuantity(val);
        }
    };

    const handleAdd = () => {
        if (quantity > 0) {
            onAddToCart(quantity); // Notify parent (App)
            setQuantity(0); // Optionally reset after adding
        } else {
            alert("Please select quantity before adding to cart.");
        }
    };

    return (
        <div className="product-card">
            <img src={img} alt={name} className="product-image" />
            <div className="product-content">
                <h2 className="product-price">{price}</h2>
                <h3 className="product-name">{name}</h3>
                <p className="product-desc">{productDesc}</p>
                <div className="product-rating">
                    {"★".repeat(rating)}
                    {"☆".repeat(5 - rating)}
                </div>
                <div className="number-content">
                    <button onClick={handleAdd}>Add to Cart</button>
                    <div className="quantity-controls">
                        <button onClick={decrement} disabled={quantity === 0}>-</button>
                        <input
                            type="number"
                            name="number"
                            id="btnNumber"
                            value={quantity}
                            onChange={handleChange}
                            min={0}
                        />
                        <button onClick={increment}>+</button>
                    </div>
                    <div className="total-price">
                        <strong>Total:</strong> ₱{total}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardComponent;
