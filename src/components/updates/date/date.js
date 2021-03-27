import React from 'react';
import Icon from '../../../resources/svg/plus-icon.svg'
import Content from '../../universal/content';


const Date = (props) => {

    const newLineArray = [];

    if (props.linesForDate.length > 0) {
        props.linesForDate.forEach((el) => {
            newLineArray.push(<Content content={el} />);
        });
    };

    return (

        <div className='row'>
            <div className='column-1st-2 marker'>
                <p className='headline'>{props.dateValue}</p>
            </div>
            <div className='column-2nd-2'>
                {newLineArray}
                <p className='addLine content'>
                    <button className="addLine__button" type='button' onClick={() => props.createNewLine(props.dateValue)}><img className='plus-icon' alt='Add line' src={Icon}></img></button>
                </p>
            </div>
        </div>
    )
};

export default Date;