import React from 'react';
import DiscardButton from "./DiscardButton";
import ComposePopUpHeader from './ComposePopUpHeader';

class ComposePopUp extends React.Component {
    render() {

        return (
            <form >
                <input className="msg-input top" type="text" placeholder="To"/>
                <input className="msg-input" type="text" placeholder="Subject"/>
                <textarea className="msg"></textarea>
            </form>
        );
    }
}

export default ComposePopUp;