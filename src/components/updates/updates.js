import React, { useState } from 'react';
import Date from './date/date';
import BigButton from '../universal/bigButton';
// import Headline from '../universal/headline';

const UpdatesCopy = (props) => {
    const [content, setContent] = useState({})

    const dateArray = [];

    const createNewLine = (dateValue) => {
        const newContentLine = prompt('Enter a line');
        const newContent = { ...content, [dateValue]: [...content[dateValue], newContentLine] };

        setContent(newContent);
    };

    const triggerAddUpdate = () => {
        const date = prompt('Enter a date');
        const newContent = { ...content }
        newContent[date] = [];

        setContent(newContent);
    };

    if (Object.keys(content).length > 0) {
        for (let el in content) {
            dateArray.push(<Date linesForDate={content[el]} createNewLine={createNewLine} dateValue={el} />);
        };
    };

    return (
        <React.Fragment>
            <div className='row'>
                <div className='column-1st-2 marker marker-updates'>
                    <p className='headline'>Updates</p>
                </div>
                <div className='column-2nd-2 content-updates'>
                    <BigButton onClickEvent={triggerAddUpdate} buttonText="Add an update" />
                </div>
            </div>
            {dateArray}
        </React.Fragment>
    )
};

export default UpdatesCopy;