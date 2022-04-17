import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';


const Service = ({service}) => {
    const {id, name,img,description}=service;
    const navigate= useNavigate();
    const datilsService= id =>{
          navigate(`/service/${id}`);
    }
    return (
        <div className='width'>
            
            
            <img className='w-100' src={img} alt="" />
            <h4>name:{name}</h4>
            <p><h4>description : </h4>{description}</p>
            <button onClick={()=>datilsService(id)} className='btn btn-primary w-100'>Datiles</button>
        </div>
    );
};

export default Service;