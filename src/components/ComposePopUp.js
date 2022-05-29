import React from 'react';
import DiscardButton from "./DiscardButton";
import ComposePopUpHeader from './ComposePopUpHeader';

class ComposePopUp extends React.Component {
    render() {

        return (
            <div >
                <input className="msg-input top" id="recipient" type="text" placeholder="To"/>
                <input className="msg-input sbj" id="subject" type="text" placeholder="Subject"/>
                <textarea className="msg"></textarea>
            </div>
        );
    }
}

export default ComposePopUp;