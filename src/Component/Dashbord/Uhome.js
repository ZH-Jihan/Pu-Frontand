import React from 'react';
import Order from '../../Hooks/order';

const Uhome = () => {
    const [order] = Order()
    return (
        <div>
            <h1>dsjfhgskjdfkjsdhf: {order.length}</h1>
        </div>
    );
};

export default Uhome;