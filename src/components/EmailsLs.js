import React from "react";
import EmailPreview from "./EmailPreview"
class EmailsLs extends React.Component {
    
  
    render() {
      function randomItem(items) {
        return items[Math.floor(Math.random()*items.length)];
      }

      let allEmails = [];
      const senders = ["Work", "School", "Parents", "Friend"];
      const subjects = ["Meeting", "Inquiry", "Hello", "Great news"];
      const readStatus = [true, false];

      const mailbox = this.props.mailbox;

{/*
      for(let i = 0; i < 40; i++) {
        allEmails.push({sender: randomItem(senders), subject: randomItem(subjects), date: "May 10", read: Math.random() < 0.5});
      }
    */}

    allEmails = [
      {sender: "brother", subject: "hi", date: "May 5", read: true, starred: true},
      {sender: "professor", subject: "missing assignment", date: "May 4", read: false, starred: false}
    ];
      
      const renderItems = allEmails.map((info) => <EmailPreview sender={info.sender} subject={info.subject} content={info.content} date={info.date } read={info.read}/>);
      return (
       <div id="table-container">
          <table id="emails">
          <tbody>
            {renderItems}
          </tbody>
        </table>
      </div>
      );
    }
  }

  export default EmailsLs;