import React, { useState } from 'react';

const guideText = ["Click", "to", "mark", "progress"];

const ProgressBar = (props) => {

    const [progress, setProgress] = useState([0, 0, 0, 0]);
    const [showText, setShowText] = useState(true);
    const [canIncrement, setCanIncrement] = useState(true);

    const progressButtons = [];
    const progressClasses = ['progress', 'progress--complete'];


    const generateButtons = () => {
        progress.forEach((el, index) => {
            const classString = (el === 0) ? `progress__square progress__square--${index + 1} transparentBack` : `progress__square progress__square--${index + 1}`;
            const contentString = (showText) ? guideText[index] : null;

            progressButtons.push(<div
                className={classString}
                onClick={() => moveProgress(index)}
            >{contentString}</div>);
        })
    }

    const moveProgress = (index) => {
        let progressArray = [0, 0, 0, 0];
        for (let i = 0; i <= index; i++) {
            progressArray[i] = 1;
        }

        const isComplete = checkCompletion(progressArray);

        if (isComplete && canIncrement) {
            props.increment();
            setCanIncrement(false);
        } else if (!isComplete && !canIncrement) {

            props.decrement();
            setCanIncrement(true);
        }

        setProgress(progressArray);
    }

    const checkCompletion = (progressArr) => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const completionStatus = progressArr.reduce(reducer);

        if (completionStatus === 4) {
            return true;
        } else {
            return false;
        }
    }


    generateButtons();



    return (
        <div className={(checkCompletion(progress) ? "progress progress--complete" : "progress")} onClick={() => { setShowText(false) }}>
            {progressButtons}
        </div>
    );
};

export default ProgressBar;