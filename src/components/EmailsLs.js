import React from "react";
import EmailPreview from "./EmailPreview"
class EmailsLs extends React.Component {


  render() {
    function randomItem(items) {
      return items[Math.floor(Math.random() * items.length)];
    }


    const senders = ["Work", "School", "Parents", "Friend"];
    const subjects = ["Meeting", "Inquiry", "Hello", "Great news"];
    const readStatus = [true, false];

    const mailbox = this.props.mailbox;

    {/*
      for(let i = 0; i < 40; i++) {
        allEmails.push({sender: randomItem(senders), subject: randomItem(subjects), date: "May 10", read: Math.random() < 0.5});
      }
    */}

    let allEmails = [
      { id: 0, sender: "Brother", subject: "hi", date: "May 5", read: true, starred: true },
      { id: 1, sender: "Professor J", subject: "missing assignment", date: "May 4", read: false, starred: false },
      { id: 2, sender: "To: RA", subject: "moving out", date: "May 8", read: true, starred: false }
    ];
    const childToParent = (idToEdit, starred, read) => {
      for (const info of allEmails) {
        if (info.id === idToEdit) {
          info.starred = starred;
          info.read = read;
        }
      }
    }

    let renderItems;
    let specificEmails = [];
    if (mailbox === "inbox") {
      specificEmails = allEmails.filter(function (email) {
        return !email.sender.startsWith("To:");
      });
    } else if (mailbox === "starred") {
      specificEmails = allEmails.filter(function (email) {
        return email.starred;
      });
    } else if (mailbox === "sent") {
      specificEmails = allEmails.filter(function (email) {
        return email.sender.startsWith("To:");
      });
    } else if (mailbox === "unread") {
      specificEmails = allEmails.filter(function (email) {
        return !email.read;
      });
    }

    renderItems = specificEmails.map((info) => <EmailPreview sender={info.sender} subject={info.subject} content={info.content} date={info.date} read={info.read} starred={info.starred} id={info.id} childToParent={childToParent}/>);

    return (
      <div id="table-container">
        <table id="emails">
          <colgroup>
            <col className="star-status" />
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