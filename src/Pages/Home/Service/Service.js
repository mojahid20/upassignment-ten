import React from 'react';
import './Service.css';


const Service = ({service}) => {
    const { name,img,description}=service;
    return (
        <div className='width'>
            
            
            <img className='w-100' src={img} alt="" />
            <h4>name:{name}</h4>
            <p><h4>description : </h4>{description}</p>
            <button className='btn btn-primary w-100'>Datiles</button>
        </div>
    );
};

export default Service;