import { useState } from "react"


export const useCounter = ( initielValue = 1 ) => {

    const [ counter, setCounter ] = useState( initielValue );

    const increment = () => {
        setCounter( counter + 1 );
    };

    const decrement = () => {
        if( counter === 0 ) return;

        setCounter( counter - 1 );
    };

    const reset = () => {
        setCounter( initielValue );
    };


    return {
        counter,
        reset,
        increment,
        decrement,
    }

}