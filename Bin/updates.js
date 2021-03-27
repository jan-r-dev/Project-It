import React, { useState, useEffect } from 'react';
import Date from './date/date';
// import Headline from '../universal/headline';

const Updates = (props) => {
    const [dateList, setDateList] = useState(['22/06/94', '15/01/95']);
    const [dateElements, setDateElements] = useState([]);
    const [content, setContent] = useState({
        '22/06/94': ['I am a big old testing line'],
        '15/01/95': 'I also like to test'
    })

    const createNewLine = (container, dateValue) => {
        displayState()
        const newContentLine = prompt('Enter a new line:');
        const newContentArray = [...content[dateValue], newContentLine];
        const newContent = {
            ...content,
            [dateValue]: newContentArray
        }

        setContent(newContent);
    };

    useEffect(() => {
        const newDateElements = [];
        dateList.forEach((el) => {
            newDateElements.push(<Date contentObj={props.contentObj[el]} createNewLine={createNewLine} key={el} dateValue={el} />);
        });

        setDateElements(newDateElements);
    }, [dateList]);

    const triggerAddUpdate = () => {
        const date = prompt('Enter a date');
        const newDateList = [...dateList, date];

        setDateList(newDateList);
    };

    const displayState = () => console.log(content['22/06/94']);

    return (
        <React.Fragment>
            <div className='row'>
                <div className='column-1st-2 marker marker-updates'>
                    <p className='headline'>Updates</p>
                    <button onClick={displayState}>display update state</button>
                </div>
                <div className='column-2nd-2 content-updates'>
                    <button onClick={triggerAddUpdate} type='button' className='content-updates__button'>Add an update</button>
                </div>
            </div>
            {dateElements}
        </React.Fragment>
    )
};

export default Updates;