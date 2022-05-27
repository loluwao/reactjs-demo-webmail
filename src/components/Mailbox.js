import React from "react";

class Mailbox extends React.Component {
    render() {
        const label = this.props.label;
        const selected = this.props.selected;
        if (selected) {
        return (
            <div id="box" className="selected">
                <p id="label">{label}</p>
            </div>
            
        );
        } else {
            return (
                <div id="box">
                    <p id="label">{label}</p>
                </div>
                
            );
        }
    }
}

export default Mailbox;