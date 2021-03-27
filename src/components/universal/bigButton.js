import React from 'react';

const BigButton = (props) => {
    return (
        <button onClick={props.onClickEvent} type='button' className='content-updates__button'>{props.buttonText}</button>
    );
};

export default BigButton;

