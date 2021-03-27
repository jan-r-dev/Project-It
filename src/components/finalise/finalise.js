import React, { useState } from 'react';
import BigButton from '../universal/bigButton';
// import Headline from '../universal/headline';

const Finalise = (props) => {
    const [displayNotes, setDisplayNotes] = useState(false);
    const [finalNotes, setFinalNotes] = useState("");

    const triggerFinalise = (isReady) => {
        let proceedAnyway = true;
        if (!isReady) {
            proceedAnyway = window.confirm('All the features have not been implemented. Finalise anyway?');
        }

        setDisplayNotes(proceedAnyway);
    }

    let notesContent = null;

    if (displayNotes) {
        notesContent =

            <div className='column-2nd-2 content-updates finalise__content'>
                <textarea onChange={() => setFinalNotes(window.event.target.value)} placeholder="Enter your notes here..." className="finalise__textarea" value={finalNotes}></textarea>
            </div>
    } else {
        notesContent =
            <div className='column-2nd-2 content-updates finalise__content'>
                <BigButton onClickEvent={() => triggerFinalise(props.featureCheck)} buttonText="Finalise the project" />
            </div>

    }

    return (
        <React.Fragment>
            <div className='row'>
                <div className="dividing-line"></div>
            </div>
            <div className='row finalise__row'>

                <div className='column-1st-2 marker finalise__marker'>
                    <p className='headline'>Final notes</p>
                </div>
                {notesContent}
            </div>
        </React.Fragment>
    )
};

export default Finalise;