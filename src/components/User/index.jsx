import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    let { userId } = useParams();

    return (
        <>
            <h1>Hola {userId}</h1>
        </>
    );
}

export default User;