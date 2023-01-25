import { reject } from 'lodash';
import React, {useState} from 'react';

const LoginUseState = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await function login({userName, password}) {
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if(userName === 'admin' && password === 'admin'){
                            resolve()
                        }else{
                            reject()
                        }       
                    }, 2000);

                })
            }
            setIsLoggedIn(true);
            setLoading(false)
        } catch (error) {
            setError(`Invalid username or password: ${error}`);
            setLoading(false);
            setUserName('');
            setPassword('');
        }
    }

    const logout = () => {
        setIsLoggedIn(false);
        setLoading(false);
    }

    return (
        <div className='App'>
            <div>
                {
                    isLoggedIn ? 
                        (
                            <div>
                                <h1>Wellcome {userName}</h1>
                                <button onClick={() => logout()}>
                                    Logout
                                </button>
                            </div>
                        )
                    :
                        (
                            <form onSubmit={submit}>
                                {
                                    error && <p style={{color: 'tomato'}}>{error}</p>
                                }
                                <input type='text'
                                    placeholder='Username'
                                    value={userName}
                                    onChange={(e) => setUserName(e.currentTarget.value)}>
                                </input>
                                <input type='text'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.currentTarget.value)}>
                                </input>
                                <button type='submit'>
                                    {loading ? 'Loggin...' : 'Login'}
                                </button>
                            </form>
                        )
                }
            </div>
        </div>
    );
}

export default LoginUseState;
