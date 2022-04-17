import React from 'react';


const SocialLogin = () => {
    
    
    
    return (
        <div>
        <div className='text-center d-flex align-items-center justify-items-center'>
        <div style={{height:'1px'}} className='bg-primary w-50'></div>
        <p className='text-center mt-2 mx-2'>or</p>
        <div style={{height:'1px'}} className='bg-primary w-50'></div>
    </div>
    <div className='w-100 mx-auto d-block'>
    <button  className='btn btn-danger w-50 '>google Sign in</button> <br />
    <button className='btn btn-primary my-3 w-50'>facebook Sign in</button> <br />

    <button className='btn btn-dark w-50'>Github Sign in</button>
    </div>
    </div>
    );
};

export default SocialLogin;