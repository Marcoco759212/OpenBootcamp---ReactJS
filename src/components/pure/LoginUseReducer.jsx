import React, {useReducer} from 'react';

const FIELD = 'FIELD';
const LOGIN = 'LOGIN';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
const LOGOUT = 'LOGOUT';

const initialState = {
    username: '',
    password: '',
    error: '',
    isLoading: false,
    isLoggedIn: false
}

const loginReducer = (state, action) => {
    switch (action.type) {
        case FIELD:
            return{
                ...state,
                [action.fieldName]: action.payload.fieldName
            }            
        case LOGIN:
            return{
                ...state,
                error:'',
                isLoading:true
            }
        case SUCCESS:
            return{
                ...state,
                error:'',
                isLoading:false,
                isLoggedIn: true
            }

        case ERROR:
            return{
                ...state,
                error: action.error,
                isLoading:false,
                isLoggedIn: false,
                username: '',
                password: ''
            }
        case LOGOUT:
            return{
                ...state,
                isLoggedIn: false,
            }
        default:
            break;
    }
}

const LoginUseReducer = () => {

    const [state, dispatch] = useReducer(loginReducer, initialState);

    const {username, password, error, isLoading, isLoggedIn} = state;

    const submit = async (e) => {
        e.preventDefault();
        dispatch({type: LOGIN})
        try {
            await function login() {
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if(username === 'admin' && password === 'admin'){
                            resolve()
                        }else{
                            reject()
                        }       
                    }, 2000);

                })
            }
            dispatch({type: SUCCESS})
        } catch (error) {
            dispatch({
                type: ERROR,
                error: `Invalid username or password: ${error}`
            })
        }
    }

    const logout = () => {
        dispatch({
            type: LOGOUT
        })
    }

    return (
<div className='App'>
            <div>
                {
                    isLoggedIn ? 
                        (
                            <div>
                                <h1>Wellcome {username}</h1>
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
                                    value={username}
                                    onChange={(e) => dispatch({
                                                        type: FIELD, 
                                                        fieldName: 'username', 
                                                        payload: {
                                                            fieldName: e.currentTarget.value
                                                        }
                                            })
                                }>
                                </input>
                                <input type='text'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => dispatch({
                                        type: FIELD,
                                        fieldName: 'password',
                                        payload: {
                                            fieldName: e.currentTarget.value
                                        }
                                    })}>
                                </input>
                                <button type='submit'>
                                    {isLoading ? 'Loggin...' : 'Login'}
                                </button>
                            </form>
                        )
                }
            </div>
        </div>
    );
}

export default LoginUseReducer;
