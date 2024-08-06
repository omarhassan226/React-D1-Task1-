import React, { useEffect, useState } from 'react';
import CartItem from './components/CartItem';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center'
    },

    button: {
        margin: '10px',
        padding:'10px 15px',
        border:'none',
        borderRadius:'5px',
        cursor: 'pointer',
        backgroundColor: '#4CAF50',
    }
};


const Cart = () => {
    
    const [products, setProduct] = useState([
        { name: 'Burger', count: 0 },
        { name: 'Fries', count: 0 },
        { name: 'Soda', count: 0 }
    ]);

    const handleInc = (name) => {
        const index = products.findIndex((product) => product.name === name);
        const newProducts = [...products]
        newProducts[index].count = newProducts[index].count+1
        setProduct(newProducts)
    };

    const handleDec = (name) => {
        const index = products.findIndex((product) => product.name === name);
        const newProducts = [...products]
        if(newProducts[index].count > 0)
        newProducts[index].count = newProducts[index].count-1
        setProduct(newProducts)
    };

    const reset = () => {
        const newProducts = [...products]
        const product = newProducts.map((product) => ({...product, count:0}))
        setProduct(product)
    }

    return (
        <div style={styles.container}>
            {products.map((item, index) => (
                <CartItem item={item} key={index} handleInc={handleInc} handleDec={handleDec} reset={reset} />
            ))}
            <div>
                <button style={styles.button} onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Cart;
