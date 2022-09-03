import React, {useState} from 'react';

const LoginButton = ({loginAction}) => {
    return(
        <button style={logedStyle} onClick={loginAction}>Login</button>
    );
}

const LogoutButton = ({logoutAction}) => {
    return(
        <button style={unlogedStyle} onClick={logoutAction}>Logout</button>
    );
}

const logedStyle = {
    backgroundColor : 'green',
    color: 'white'
}

const unlogedStyle = {
    backgroundColor : 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

const OptionalRenders = () => {

    const [access, setAccess] = useState(false);
    const [nMesagges, setNMesagges] = useState(0);

    let addMessages = () => {
        setNMesagges(nMesagges + 1)
    }

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }

    let OptionalButton;

    if(!access){
        OptionalButton = <LoginButton loginAction={loginAction}></LoginButton>
    }else{
        OptionalButton = <LogoutButton logoutAction={logoutAction}></LogoutButton>
    }

    return (
        <div>
            { OptionalButton }
            {access ? 
                <div>
                    { nMesagges > 0 && <p> you have {nMesagges} new messagges... </p> }
                    { nMesagges === 0 && <p> There are no new mesagges </p> }
                    <button onClick={addMessages}> Add new message </button>
                </div>
            :
                null
            }
        </div>
    );
}

export default OptionalRenders;
