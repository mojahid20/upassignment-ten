import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate= useNavigate();

    const navigatelogin=()=>{
        navigate('/login');
    }
    if(user){
        navigate('/home');
    }
    


        
        const handalregister= (event)=>{
            event.preventDefault();
          
            const email=event.target.email.value;
            const password=event.target.password.value;
            createUserWithEmailAndPassword(email,password)
            
        }
    return (
        <div className='w-25 mx-auto'>
            <h1 className='text-center my-4'>Register</h1>
           <form  onSubmit={handalregister}>
               <input type="text" name='name' placeholder='enter name' /> <br />
               <input type="email" name='email' placeholder='enter emal' required /> <br />
               <input type="password" name='password' placeholder='enter password' required /> <br />
               <input type="submit"value='register'/>
               <p  className='text-center mt-3'>All ready have an Account ? <Link to ='/login' className='text-danger text-decoration-none' onClick={navigatelogin}>Plece Lgin</Link> </p>
           </form>
            <SocialLogin />
        </div>
    );
};

export default Register;