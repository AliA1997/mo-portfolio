import React, { Component } from 'react';
import ContactForm from '../../presentational/ContactForm/ContactForm';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

export default class ContactPage extends Component {
    constructor() {
        super();
        this.state ={
            email: '',
            subject: '',
            name: '',
            company_name: '',
            message: ''
        }
    }
    handleEmail = email => {
        this.setState({email});
    }
    handleSubject = subject => {
        this.setState({subject});
    }
    handleName = name => {
        this.setState({name});
    } 
    handleCompanyName = company_name => {
        this.setState({company_name})
    }
    handleMessage = message => {
        this.setState({message});
    }
    sendMessage = () => {
        const { email, subject, name, company_name, message } = this.state;
        const newMessage = { email, subject, name, company_name, message }; 
        return axios.post('/api/contact', newMessage).then(res => {
            alert(res.data.message);
            this.setState({email: '', subject: '', name: '', company_name: '',message: ''})
        }).catch(err => console.log("Send MEssage Error---------", err));
    }
    render() {
        return (
            <div className='container'>
                <Typography className='main header'>Contact</Typography>
                <ContactForm {...this.state} handleEmail={this.handleEmail} handleSubject={this.handleSubject} 
                handleName={this.handleName} handleCompanyName={this.handleCompanyName} handleMessage={this.handleMessage} sendMessage={this.sendMessage}/>
            </div>
        );
    }
}