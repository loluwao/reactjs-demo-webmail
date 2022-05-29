import React from 'react';
import unstarred from "./star.png";
import isstarred from "./orangestar.png";

class EmailPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {read: this.props.read, starred: this.props.starred};
    
    }
    render() {
        
        const sender = this.props.sender;
        const subject = this.props.subject;
        const date = this.props.date;
        const content = this.props.content;
        const markAsRead = () => {
            this.setState({read: true});
              
        }

        const updateStarred = () => {
            if (this.state.starred) {
                this.setState({starred: false});
            } else {
                this.setState({starred: true});
            }
        }

        
            return (
                
                <tr className={`email ${this.state.read ? "read" : "unread"}`} onClick={markAsRead}> 
                <td className="star-status"><img src={this.state.starred ? isstarred : unstarred} className="star-icon" onClick={updateStarred}/></td>
                <td className="sender">{sender}</td>
                <td className="subject">{subject}</td>
                <td className="content">{content}</td>
                <td className="date">{date}</td>
            </tr>
            );
        

    }
}

export default EmailPreview;