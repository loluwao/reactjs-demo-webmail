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
      {sender: "Brother", subject: "hi", date: "May 5", read: true, starred: true},
      {sender: "Professor Jjjjjjjjjjjjjjjj", subject: "missing assignment", date: "May 4", read: false, starred: false},
      {sender: "To: RA", subject: "moving out", date: "May 8", read: true, starred: false}
    ];
      
      let renderItems;
      let specificEmails = [];
      if (mailbox === "inbox") {
        specificEmails = allEmails.filter(function(email) {
          return !email.sender.startsWith("To:");
        });
      } else if (mailbox === "starred") {
        specificEmails = allEmails.filter(function(email) {
          return email.starred;
        });
      } else if (mailbox === "sent") {
        specificEmails = allEmails.filter(function(email) {
          return email.sender.startsWith("To:");
        });
      }

      renderItems = specificEmails.map((info) => <EmailPreview sender={info.sender} subject={info.subject} content={info.content} date={info.date } read={info.read} starred={info.starred}/>);

      return (
       <div id="table-container">
         <p>{mailbox}</p>
          <table id="emails">
            <colgroup>
              <col className="star-status"/>  
            </colgroup>
          <tbody>
            {renderItems}
          </tbody>
        </table>
      </div>
      );
    }
  }

  export default EmailsLs;