import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css'


export const CounterHook = () => {

    const {state, increment, decrement, Reset} = useCounter(100)

    //const Reset = () => {
        //useCounter(100)
    //}

    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr/>

            <button onClick={ () => increment(2)} className='btn btn-primary'>+1</button>
            <button onClick={ () => Reset(100) } className='btn btn-secondary'>Reset</button>
            <button onClick={ () => decrement(2)} className='btn btn-danger'>-1</button>

        </>
    )
}