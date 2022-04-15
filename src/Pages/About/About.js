import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const About = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            {
                user ?
                    <div className='text-center mt-4'>
                        <h1>Welcome to the page {user.displayName}</h1>
                        <img src={user.photoURL} alt="" /> </div>
                    :
                    <h1 className='text-center mt-4'>Welcome to the page</h1>
            }
        </div>
    );
};

export default About;