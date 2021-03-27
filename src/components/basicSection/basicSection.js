import React, { useState } from 'react';
import Content from '../universal/content';
import Headline from '../universal/headline';
import AddLine from '../universal/addLine';

const BasicSection = (props) => {

    const [content, setContent] = useState([])

    const contentArray = [];

    if (content.length > 0) {
        content.forEach(el => {
            contentArray.push(<Content content={el} />);
        })
    };

    const enterInput = () => {
        const input = prompt("Enter your input");

        setContent([...content, input]);
    }

    return (
        <div className='row'>
            <Headline headlineTag={props.headlineTag}></Headline>
            <div className='column-2nd-2'>
                {contentArray}
                <AddLine createNewLine={enterInput} container={props.containerName}></AddLine>
            </div>
        </div>
    );
};

export default BasicSection;

/*
    purpose: {
      bla: { content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ducimus sapiente molestiae non.' },
    },

*/