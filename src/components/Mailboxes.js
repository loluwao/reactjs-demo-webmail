import React from 'react';
import Mailbox from './Mailbox';

class Mailboxes extends React.Component {
    render() {
        return (
            <div>
                <Mailbox label="Inbox"/>
                <Mailbox label="Starred"/>
                <Mailbox label="Important"/>
                <Mailbox label="Sent"/>
                <Mailbox label="Drafts"/>
                {/*
                <Mailbox label="Drafts"/>
                <Mailbox label="Important"/>
        */}
            </div>
        );
    }
}

export default Mailboxes;