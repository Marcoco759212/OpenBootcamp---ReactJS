import React from 'react';

const AsyncExamples = () => {

    const generateNumber = async () => {
        return 1;
    }

    const obtainNumber = () => {
        generateNumber().then((response) => 
            alert(`Response: ${response}`)
        )
    }

    const generatePromiseNumber = async () => {
        return Promise.resolve(2)
    }

    const obtainPromiseNumber = () => {
        generatePromiseNumber().then((response) =>
            alert(`Response: ${response}`)
        ).catch((error) => 
            alert(`Somthing went wrong: ${error}`)
        )
    }

    const saveSesionStorage = async (key, value) => {
        await sessionStorage.setItem(key, value);
        return Promise.resolve(sessionStorage.getItem(key))
    }

    const showStorage = () => {
        saveSesionStorage('name', 'marco')
            .then((response) => {
                let value = response;
                alert(`Saved Name: ${value}`)
            }).catch((error) => {
                alert(`Somthing went wrong: ${error}`)
            }).finally(() => {
                console.log('SUCCES Name saved and retreived')
            })
    }

    const obtainMessage = async () => {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello world'), 2000)
        });

        let message = await promise;

        await alert(`Message Recived ${message}`)
    }

    const returnError = async () => {
        await Promise.reject(new Error('Ooooops!'))
    }

    const consumeError = async () => {
        returnError()
            .then((response) => {
                alert(`Everything is OK: ${response}`)
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
            .finally(() => {
                alert(`Finally executed`)
            })
    }

    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidURL');
            alert(`Respopnse: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Somthing went wrong with your URL: ${error} (check your console)`)
        }
    }

    const multiplePromise = async () => {
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch((error) => {
            alert(`Something went wrong with your URLs: ${error} (check your console)`);
        })
    }

    return (
        <div>
            <button onClick={obtainNumber}>
                Obtain Number
            </button>
            <button onClick={obtainPromiseNumber}>
                Obtain Promise Number
            </button>
            <button onClick={showStorage}>
                Save Name and show
            </button>
            <button onClick={obtainMessage}>
                Send message in 2 seconds
            </button>
            <button onClick={consumeError}>
                Obtain Error
            </button>
            <button onClick={urlNotFound}>
                Request to uknown URL
            </button>
            <button onClick={multiplePromise}>
                Multiple Promises
            </button>
        </div>
    );
}

export default AsyncExamples;
