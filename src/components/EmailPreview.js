import React from 'react';

class EmailPreview extends React.Component {

    render() {
        const sender = this.props.sender;
        const subject = this.props.subject;
        const date = this.props.date;
        const content = this.props.content;
        const read = this.props.read;
        const starred = this.props.starred;

        const markAsRead = () => {
            this.setState({read: true});
              
          }

        if (read) {
            return (
                <tr className="email read" > 

                <td className="sender">{sender}</td>
                <td className="subject ">{subject}</td>
                
                <td className="date">{date}</td>
            </tr>
            );
        } else {
            return (
                <tr className="email unread"> 

                <td className="sender" onClick={markAsRead}>{sender}</td>
                <td className="subject">{subject}</td>
                <td className="date">{date}</td>
            </tr>
            );
        }

    }
}

export default EmailPreview;