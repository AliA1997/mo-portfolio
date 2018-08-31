import React, { Component } from 'react';
//import MuiTHemeProvider responsible for giving a mateial ui theme and configuring material-ui
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
//import your Navbar component 
import Navbar from './components/presentational/Navbar/Navbar';
//import routes from react-router-dom
import Router from './Router';
import './App.css';

//Define your theme for material-ui
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00bcd4'
    },
    secondary: {
      main: '#ff9100'
    },
    typography: {
      fontSize: '1.25em',
      marginBottom: '5%'
    },
  }
})
class App extends Component {
  constructor() {
    super();
    this.state = {
      clickedHamburger: false 
    }
  }
  clickIcon = () => {
    this.setState({clickedHamburger: !this.state.clickedHamburger});
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Navbar clickedHamburger={this.state.clickedHamburger} clickIcon={this.clickIcon}/>
          <Router />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
