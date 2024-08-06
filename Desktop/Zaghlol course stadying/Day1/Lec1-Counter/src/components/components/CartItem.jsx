import React, { useState } from 'react';

    const styles = {
        container: {
            width:'50%',
            display:'flex',
            justifyContent:'space-around',
            padding:'10px',
            borderBottom:'1px solid brown'
        },

        operator : {
            padding:'5px 15px',
            fontSize:'20px',
            backgroundColor:'brown',
            color:'white',
            cursor:'pointer',
            borderRadius:'5px',
            width:'40px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }
    }

const CartItem = ({item, handleInc, handleDec}) => {
    return (
        <div style={styles.container}>
            <span style={styles.operator}onClick={()=>handleDec(item.name)}>
                -
            </span>
            <div style={{ width:'20%' }}>
                {
                        <div className='p-3'>{item.name}</div>
                }
            </div>
            <div>
                {
                    <div className='p-3'>{item.count}</div>
                }
            </div>
            <span style={styles.operator} onClick={()=>handleInc(item.name)}>
                +
            </span>
        </div>
    );
}

export default CartItem;
