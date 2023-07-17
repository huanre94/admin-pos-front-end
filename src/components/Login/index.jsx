import React, { useState } from 'react';

export default function Login() {
    const [userData, setUserData] = useState({ userName: "", password: "" })
    const [error, setError] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        // var { userName, password } = document.forms[0];

        console.log(userData)

        // const data = Array.from(document.forms[0])
        //     .filter((input) => input.name)
        //     .reduce(
        //         (obj, input) => Object.assign(obj, { [input.name]: input.value }),
        //         {}
        //     );

        // alert(JSON.stringify(data));

        // userName.value + " " + password.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='form-inner'>

                    <h2>Login</h2>
                    <div className='form-group'>
                        <label htmlFor='userName'>Usuario</label>
                        <input type='text' id='userName' name='userName' onChange={e => setUserData({ ...userData, userName: e.target.value })} value={userData.userName} />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='password'>Clave</label>
                        <input type='password' id='password' name='password' onChange={e => setUserData({ ...userData, password: e.target.value })} value={userData.password} />
                    </div>

                    <div>
                        <input type='submit' />
                    </div>
                </div>
            </form>

        </>
    );
}