import React from 'react';

const Headline = (props) => {
    return (
        <div className='column-1st-2 marker'>
            <p className='headline'>{props.headlineTag}</p>
        </div>
    );
};

export default Headline;