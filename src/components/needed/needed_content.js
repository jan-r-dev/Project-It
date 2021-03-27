import React, { useEffect, useState } from 'react';


const NeededContent = (props) => {

    const [status, setStatus] = useState(false);
    const [classes, setClasses] = useState('content content__needed');

    const updateCheckbox = () => {
        const checked = window.event.target.checked;
        setStatus(checked);
    };

    useEffect(() => {
        if (status) {
            const newClasses = 'content content__needed content__needed-checked';
            setClasses(newClasses);
        } else {
            const newClasses = 'content content__needed';
            setClasses(newClasses);
        };
    }, [status]);

    return (
        <p className={classes} id={props.elId} key={props.elKey}>
            {props.content}
            <label className="checkbox" >
                <span className="checkbox__input">
                    <input type="checkbox" id={`${props.elId}-1`} onClick={updateCheckbox}></input>
                    <span className="checkbox__control">
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                            <path fill='none' stroke='currentColor' strokeWidth='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' />
                        </svg>
                    </span>
                </span>
                {/* <span className="checkbox__label">Checkbox</span> */}
            </label>
        </p>

    );
};

export default NeededContent;
//https://moderncss.dev/pure-css-custom-checkbox-style/ Create custom button checkbox style