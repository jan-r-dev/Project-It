import React, { useState } from 'react';
import Content from '../universal/content';
import Headline from '../universal/headline';
import AddLine from '../universal/addLine';
import ProgressBar from '../universal/progressBar';

const Feature = (props) => {

    const [content, setContent] = useState(["I am an empty feature to test the progress bar"]);
    const [featureCheck, setFeatureCheck] = useState([]);

    const contentArray = [];

    const incrementFeatureCheck = () => {
        const newFeatureCheck = [...featureCheck];
        newFeatureCheck.push(1);
        setFeatureCheck(newFeatureCheck);

        if (content.length === newFeatureCheck.length) {
            props.featureStatusUpdate(true);
        }
    }

    const decrementFeatureCheck = () => {
        const newFeatureCheck = [...featureCheck];
        newFeatureCheck.pop();
        setFeatureCheck(newFeatureCheck);
        props.featureStatusUpdate(false);
    }

    const enterInput = () => {
        const input = prompt("Enter your input");
        props.featureStatusUpdate(false); // When you add a new feature, completion of all features must be set to false

        setContent([...content, input]);
    }



    if (content.length > 0) {
        content.forEach((el) => {
            contentArray.push(<Content content={el} />);
            contentArray.push(<ProgressBar increment={incrementFeatureCheck} decrement={decrementFeatureCheck} />);
        })
    };

    return (
        <div className='row'>
            <Headline headlineTag="Features"></Headline>
            <div className='column-2nd-2'>
                {contentArray}
                <AddLine createNewLine={enterInput} container={props.containerName}></AddLine>
            </div>
        </div>
    );
};

export default Feature;

/*
    purpose: {
      bla: { content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ducimus sapiente molestiae non.' },
    },

*/