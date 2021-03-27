import React, { useState } from 'react';

const Popup = (props) => {

    const [textInput, setTextInput] = useState('')

    const handleChange = (event) => {
        setTextInput(event.target.value);
    };

    return (
        <div className={props.inputtable ? 'popup popup--visible' : 'popup'}>
            <div className='popup__content'>
                <p className='popup__label'>Input your content here</p>
                <textarea value={textInput} onChange={handleChange} className='popup__input'></textarea>
                <button onClick={props.cancelFunction} className='popup__btn popup__btn--cancel'>Cancel</button>
                <button onClick={() => props.confirmFunction(textInput)} className='popup__btn popup__btn--confirm'>Confirm</button>
            </div>
        </div>
    );
};

export default Popup;

//Popup stores the input into the text area as a variable inputText
// Popup takes a function as a prop
// Function is bound to confirmation button and takes inputText as a variable
// Thus the content is exported into App.js and can be stored in state there


/*

<div class="popup" id='popup'>
    <div class="popup__content">
        <div class="popup__left">
            <img class='popup__img' src="img/nat-8.jpg" alt="Tour photo">
            <img class='popup__img' src="img/nat-9.jpg" alt="Tour photo">
        </div>
        <div class="popup__right">
            <a href="#section-tours" class="popup__close">&times;</a>
            <h2 class="heading-secondary u-margin-bottom-small">Start booking now!</h2>
            <h3 class="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
            <p class="popup__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper aliquam est sed consectetur. Mauris consectetur sed justo a aliquet. Sed vel pretium diam. Proin tempor neque congue, aliquet ante sit amet, aliquam massa. Donec ullamcorper ligula et pellentesque interdum. Fusce auctor dui a magna tincidunt gravida. Donec vel enim pretium, suscipit mauris ut, bibendum metus. Nunc gravida volutpat dolor dignissim semper. Donec dictum tincidunt urna, vitae ornare enim finibus in. Suspendisse dictum sodales orci sed laoreet. Suspendisse potenti. Ut mollis tortor vel porta tincidunt. Vestibulum tempor purus eget nisi volutpat aliquet. Mauris consectetur sed justo a aliquet. Sed vel pretium diam. Donec ullamcorper ligula et pellentesque interdum. Fusce auctor dui a magna tincidunt gravida. Donec vel enim pretium, suscipit mauris ut, bibendum metus. Nunc gravida volutpat dolor dignissim semper. Donec dictum tincidunt urna, vitae ornare enim finibus in. Suspendisse dictum sodales orci sed laoreet. Suspendisse potenti. Ut mollis tortor vel porta tincidunt. Vestibulum tempor purus eget nisi volutpat aliquet. Morbi quis bibendum dui, laoreet faucibus est. Nunc porta mattis justo non ultrices.
            </p>
            <a href="#" class="btn btn--green">Book now</a>
        </div>
    </div>
</div>

*/