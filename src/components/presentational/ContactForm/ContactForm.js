import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './ContactForm.css';
const ContactForm = (props) => {
    return (
        <div className='form'>
            <TextField 
                required
                id="email"
                label="Email"
                value={props.email}
                onChange={e => props.handleEmail(e.target.value)}
                margin="normal"
            />
            <TextField 
                required
                id="subject"
                label="Subject"
                value={props.subject}
                onChange={e => props.handleSubject(e.target.value)}
                margin="normal"
            />
            <TextField 
                required
                id="name"
                label="Name"
                value={props.name}
                onChange={e => props.handleName(e.target.value)}
                margin="normal"
            />
            <TextField 
                id="subject"
                label="Company Name(Optional)"
                value={props.company_name}
                onChange={e => props.handleCompanyName(e.target.value)}
                margin="normal"
            />
            <TextField 
                multiline
                required
                id="message"
                label="Message"
                value={props.message}
                onChange={e => props.handleMessage(e.target.value)}
                margin="normal"
            />
            <Button variant="outlined" onClick={() => props.sendMessage()} color="secondary">Send Message</Button>
        </div>

    );
};

export default ContactForm;