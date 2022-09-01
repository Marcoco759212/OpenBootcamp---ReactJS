import React, { useRef } from 'react';

const Child = ({name, send, update}) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    const pressButton = () => {
        const text = messageRef.current.value;
        alert(`Text in input ${text}`)
    }

    const pressButtonParams = (text) => {
        alert(`Text: ${text}`)
    }

    const submitName = (e) => {
        e.preventDefault()
        update(nameRef.current.value)
    }

    return (
        <div style={{ background: 'black', padding: '30px' }}>
            <p onMouseOver={ () => console.log('On Mause Over')}>
                Hello, {name}
            </p>
            <button onClick={ () => console.log('Boton 1 presionado') }>
                Boton 1
            </button>
            <button onClick={ pressButton }>
                Boton 2
            </button>
            <button onClick={ () => pressButtonParams('text') }>
                Boton 3
            </button>
            <input placeholder='Insert text'
                onFocus={ () => console.log('input focus') }
                onChange={ (e) => console.log('Input changed: ', e.target.value) }
                onCopy={ () => console.log('Copied text from Input') }
                ref={messageRef}
            />
            <button onClick={ () => send(messageRef.current.value) }>
                Send Message
            </button>
            <div style={{ marginTop: '20px' }}>
                <form onSubmit={ submitName }>
                    <input placeholder='New Name'
                        ref={ nameRef }
                    />
                    <button type='submit'>
                        Update NAme
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Child;
