import React from 'react';
import unstarred from "./star.png";
import isstarred from "./orangestar.png";

class EmailPreview extends React.Component {

    render() {
        const sender = this.props.sender;
        const subject = this.props.subject;
        const date = this.props.date;
        const read = this.props.read;
        const starred = this.props.starred;
        const markAsRead = () => {
            this.setState({read: true});
            alert("a");
              
        }

        
            return (
                
                <tr className={`email ${read ? "read" : "unread"}`} onClick={markAsRead}> 
                <td className="star-status"><img src={starred ? isstarred : unstarred} className="star-icon"/></td>
                <td className="sender">{sender}</td>
                <td className="subject">{subject}</td>
                <td className="date">{date}</td>
            </tr>
            );
        

    }
}

export default EmailPreview;