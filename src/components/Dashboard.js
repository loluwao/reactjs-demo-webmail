import React from 'react';
import EmailHeading from './EmailHeading';
import EmailsLs from './EmailsLs';
import Mailbox from './Mailbox';
import ComposeButton from "./ComposeButton";
import ComposePopUp from "./ComposePopUp";
import ComposePopUpHeader from './ComposePopUpHeader';
import DiscardButton from './DiscardButton';
import SearchBox from './SearchBox';
import SendButton from "./SendButton";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({makingEmail: false, mailboxType: "inbox"});
    
  }
  render() {
    
    const openPopUp = () => {
      this.setState({makingEmail: true});
        
    }

    const closePopUp = () => {
      this.setState({makingEmail: false});
        
    }

    const pushSentEmail = () => {

    }

    return (
      <div id="d">
        <div id="dashboard">
          <span className='inline left'>
            <div><EmailHeading /></div>
          
            <div onClick={openPopUp}>
              <ComposeButton />
              
            </div>
            
            <div>
                <div><Mailbox label="Inbox" selected={true}/></div>
                <div><Mailbox label="Starred" selected={false}/></div>
                <div><Mailbox label="Important" selected={false}/></div>
                <div><Mailbox label="Sent" selected={false}/></div>
                <div><Mailbox label="Drafts" selected={false}/></div>
                {/*
                <Mailbox label="Drafts"/>
                <Mailbox label="Important"/>
        */}
            </div>
            
          
          </span>
          {this.state.makingEmail && 
          <div id="pop-up">
            <div id="pop-up-header">
                <ComposePopUpHeader/>
                <span className="" onClick={closePopUp}>
                  <DiscardButton />
                </span>
              </div>
            <ComposePopUp/>
            <span onClick={closePopUp}><SendButton/></span>
              
          </div>}

          
          
        </div>
        <div className="right inline">
        <SearchBox/>
        <EmailsLs/>
        </div>
      </div>
    )
  }
}

  export default Dashboard;