import React from 'react';
import Icon from '../../resources/svg/plus-icon.svg'

const AddLine = (props) => {

    return (
        <p className='addLine content'>
            <button className="addLine__button" type='button' onClick={() => props.createNewLine(props.container)}><img className='plus-icon' alt='Add line' src={Icon}></img></button>
        </p>
    )
}

export default AddLine