import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
//import hte image icon
import NavBarIcon from './navbar-icon.svg';
//import Link component from react-router-dom 
import { Link } from 'react-router-dom';
//import css file for styling
import './Navbar.css';

const Navbar = (props) => {
    const { clickedHamburger } = props;
    return (
        <div className='navbar-header'>
            <div className='header'>
                <AppBar style={{color: '#fff'}} className='navbar-container'>
                    <Toolbar className='navbar'>
                        <Typography className='app-header2'>Mohamad Alhaddad | Entrepreneur | Amateur Car Seller</Typography>    
                        <Link to='/'>Home</Link>
                        <Link to='/cars_sold'>Cars Sold</Link>
                        <Link to='/contact'>Contact</Link>
                    </Toolbar>
                </AppBar>
            </div>
            <div className='mobile-header'>
                <AppBar style={{color: '#fff'}}>
                    <Toolbar className='navbar'>
                        <Button  onClick={() => props.clickIcon()} style={{height: '100%', width: '25%', background: 'red', marginLeft: 0, transition: 'background-color 500ms', backgroundColor: clickedHamburger ? 'blue' : 'transparent', height: '100%', width: '33%'}}>
                            <Avatar src={NavBarIcon} alt="navbar icon" style={{borderRadius: '0'}}/>
                        </Button>
                        <Typography className='app-header'>Mohamad Alhaddad | Entrepreneur | Amateur Car Seller</Typography>
                    </Toolbar>
                    <div className='mobile-nav' style={{transition: 'background-color 500ms', visibility: clickedHamburger ? 'initial' : 'hidden', display: clickedHamburger ? 'grid' : 'none', width: '100%'}}>
                        <Link to='/'>Home</Link>
                        <Link to='/cars_sold'>Cars Sold</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                </AppBar>
            </div>
        </div>
    );
};

export default Navbar;