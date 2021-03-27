import React, { useState } from 'react';

const Concept = (props) => {
    const [conceptContent, setConceptContent] = useState("Click to enter your project name")

    const setConceptName = () => {
        const wantToChange = window.confirm("Do you want to set a new project name?");

        if (wantToChange) {
            const chosenName = prompt("Enter your project name");
            setConceptContent(chosenName);
        }

    }

    return (
        <div className='row'>
            <div onClick={() => setConceptName()} className='concept marker'>
                    <p className='concept__paragraph'>{conceptContent}</p>

            </div>
        </div>
    );
};

export default Concept;