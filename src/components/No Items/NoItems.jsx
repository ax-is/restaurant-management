import React from 'react';
import emptyCartImage from '../../media/empty cart.png';

function NoItem() {
    return (
        <div className='emptycartdiv'>
            <img src={emptyCartImage} alt="Empty Cart" className='emptycartimage' />
            <h1>Add Items to your cart</h1>
        </div>
    );
}

export default NoItem;