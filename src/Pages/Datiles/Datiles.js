import React from 'react';
import { useParams } from 'react-router-dom';

const Datiles = () => {
    const {serviceId}= useParams();
    return (
        <div>
            <h2>datalls:{serviceId}</h2>
        </div>
    );
};

export default Datiles;