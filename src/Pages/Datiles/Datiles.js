import React from 'react';

import { Link, useParams } from 'react-router-dom';


const Datiles = () => {
    const {serviceId}= useParams();
    return (
        <div>
            <h2>datalls:{serviceId}</h2>
           <Link to='<Checkout /'>
             <button className='btn btn-primary'>proced checkout</button>
           </Link>
        </div>
    );
};

export default Datiles;