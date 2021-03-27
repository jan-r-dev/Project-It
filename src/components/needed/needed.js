import React, { useState } from 'react';
import AddLine from '../universal/addLine'
import Headline from '../universal/headline'
import NeededContent from '../needed/needed_content'



const Needed = (props) => {

    const [content, setContent] = useState([])

    const enterInput = () => {
        const input = prompt("Enter your input");

        setContent([...content, input]);
    }

    const createContent = () => {
        const contentArr = [];

        content.forEach((el, index) => {
            contentArr.push(<NeededContent elKey={`needed--${index}`} elId={`needed--${index}`} content={el} />);
        })

        return contentArr;
    };

    return (
        <div className='row'>
            <Headline headlineTag='Needed' />
            <div className='column-2nd-2'>
                {createContent()}
                <AddLine createNewLine={enterInput} container='needed' />
            </div>
        </div>
    );
};

export default Needed;