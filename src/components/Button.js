import React from  'react';

const Button = props => {
    const saludo = 'Hola Gdl + props.name';
    return(
        <button className='button' onClick={() => {console.log('Hola Gdl')}}> {saludo}</button>
    );
};


export default Button