import React, { useState } from "react";
import {Link} from "react-router-dom";

function Cart() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeItem = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const products = [
        { id: 1, name: "Cosmetic", price: 20 },
        { id: 2, name: "Scrab", price: 40 },
        { id: 3, name: "Shoes", price: 60 },
    ];

    const countByProduct = cart.reduce((acc, product) => {
        acc[product.id] = (acc[product.id] || 0) + 1;
        return acc;
    }, {});

    const cartItems = Object.keys(countByProduct).map((productId) => {
        const product = cart.find((p) => p.id === parseInt(productId));
        return {
            ...product,
            count: countByProduct[productId],
        };
    });

    const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

    return (
        <div className="Cart">
            <ProductList products={products} addToCart={addToCart} />
            <CartList cartItems={cartItems} removeItem={removeItem} totalPrice={totalPrice} />
        </div>
    );
}

function ProductList({ products, addToCart }) {
    return (
        <div>
            <h2>Items :</h2>
            <ul className="cart_list">
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.price} $
                        <button onClick={() => addToCart(product)}>Add</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function CartList({ cartItems, removeItem, totalPrice }) {
    return (
        <div className="Cart_text">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your shopping cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.price} $ x {item.count}
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </li>
                    ))}
                    <li id="total">Total :{totalPrice} $</li>


                </ul>





            )}
            <Link to="/">Close it</Link>
        </div>

    );
}

export default Cart;
