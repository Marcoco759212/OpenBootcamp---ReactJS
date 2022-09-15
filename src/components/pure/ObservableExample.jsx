import React, {useState} from 'react';
import { getNumbers } from '../../Services/ObservableService';

const ObservableExample = () => {

const [number, setNumber] = useState(0);

const obtainNewNumbers = () => {

    console.log('Subscription to Observable');
    getNumbers.subscribe({
        next(newNumber){
            console.log('New value:' , newNumber);
            setNumber(newNumber)
        },
        error(error){
            alert(`Something went wrong ${error}`);
            console.log('Error in observable');
        },
        complete(){
            alert(`Fisnish with: ${number}`);
            console.log('Done with Observable');
        }
    })
}

    return (
        <div>
            <h1>Number: {number}</h1>
            <button onClick={obtainNewNumbers}>
                Obtain new numbers
            </button>
        </div>
    );
}

export default ObservableExample;
