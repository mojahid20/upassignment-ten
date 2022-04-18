import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef= useRef('');
    const passwordRef = useRef('');
    const navigate= useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      if(user){
          navigate('/home');
      }

    const handalSubmit=(event)=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password= passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateReg= event =>{
     navigate('/register');
    }
    return (
        <div className='w-25 mx-auto'>
        <h1 className='text-center my-3 '>login</h1>
        <Form onSubmit={handalSubmit} >
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control ref={passwordRef} type="password" placeholder="Password" required />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" type="submit">
Submit
</Button>
<p >are you  new? <Link to ='/register' className='text-info text-decoration-none' onClick={navigateReg}>Plece Register</Link> </p>

</Form>
<SocialLogin />
    </div>
    );
};

export default Login;