import React from 'react';

import { MessageServices } from './MessageServices';

const ComponentB = () => {

    const stud= {
        id: 31152,
        firstName: "sdfasdf",
        lastName: "adfasdf",
        email: "asdf@gma.com",
        password: "123456789",
        confirmPassword: "123456789"
      }
    const sendMessage=()=>{
        return MessageServices.sendMessage('Message from Home Page Component to App Component!'); 
        //   MessageServices.sendMessage(stud)
    }

    const clearMessages = ()=> {
     return MessageServices.clearMessage();
    }

        return (
            <div>
                <h2>Sending Message</h2>
                <button onClick={sendMessage} className="btn btn-primary">Send Message</button>
                <button onClick={clearMessages} className="btn btn-secondary">Clear Messages</button>                
            </div>
        );
}

export default ComponentB;