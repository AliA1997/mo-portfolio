import React, { Component } from 'react';
//import components
import Slideshow from '../Slideshow/Slideshow';
import Typography from '@material-ui/core/Typography';
//import car images 
import volvoS40 from '../../../car-images/VolvoS40.png';
import volvoS80 from '../../../car-images/VolvoS80.png';
import BMW525i from '../../../car-images/BMW525i2000.png';
import HondaAccordEx from '../../../car-images/HondaAccordEX.png';
import SaturnL300 from '../../../car-images/SaturnL300.png';
import VWJetta from '../../../car-images/VWJetta.png';
import BMW7Series from '../../../car-images/BMW745li.png';
//import css file for styling
import './Home.css';

const images = [
    {image: volvoS40, caption: 'Volvo S40'}, 
    {image: volvoS80, caption: 'Volvo S80'}, 
    {image: BMW525i, caption: '2002 BMW 525i'},
    {image: HondaAccordEx, caption: '2004 Honda Accord EX'},
    {image: SaturnL300, caption: '2002 Saturn L300'},
    {image: VWJetta, caption: '2005 VW Jetta'},
    {image: BMW7Series, caption: '2002 BMW 745li'}
];

export default class Home extends Component {
    render() {
        return (
            <div className='container'>
                <Typography className='main header'>Welcome to Mohamad Alhaddad's Portfolio</Typography>
                <Slideshow slides={images}/>
                <div className='pane'> 
                    <Typography className='header'>Objective</Typography>
                    <Typography className='text'>1 year in retail, with areas of expertise that include inventory, cash Management, and exceptional work experience.</Typography>
                    <Typography className='text'>A hardworking, fast learner, is 2 traits that would describe me in the workplace.</Typography>
                    <Typography className='text'> Who drives high sales in a low and fast pace work environment.</Typography>
                    <Typography className='text'> I have a great work ethic and if any problems I had that day at home or at work will not affect how I work on a daily basis.</Typography>
                    <Typography className='text'> Maintains a neat and orderly workplace at all times.</Typography>
                    <Typography className='text'>I have passion for sales, and willing to advance my knowledge and career to it’s full potential</Typography>
                </div>
                <div className='pane'>
                    <Typography className='header'>Experience</Typography>
                    <Typography className='text'>Company: Rolled Ice Cream</Typography>
                    <Typography className='text'>Location: Las Vegas, NV</Typography>
                    <Typography className='text'>Responsiblities:</Typography>
                    <Typography className='text'>Consistently recieved 100% rate of customer satisfaction.</Typography>
                    <Typography className='text'>Completed opening and closing checklist according to set standards.</Typography>
                    <Typography className='text'>Effectively used items in stock to decrease waste and profit loss.</Typography>
                    <br/>
                    <Typography className='text'>Company: Walmart Neighborhood Market</Typography>
                    <Typography className='text'>Location: Las Vegas, NV</Typography>
                    <Typography className='text'>Responsiblities:</Typography>
                    <Typography className='text'>Provide High Quality Service</Typography>
                    <Typography className='text'>Cleaned walls, fans, and drains in bakery coolers, display cases, and work areas.</Typography>
                    <Typography className='text'>Exemplified and Communicated company's vision and goals.</Typography>
                    <Typography className='text'>Emphasized fast, friendly customer service.</Typography>
                </div>
                <div className='pane'>
                    <Typography className='header'>Education</Typography>
                    <Typography className='text'>School: Adult Education in Las Vegas</Typography>
                    <Typography className='text'>Time: 05/2018-06/2018</Typography>
                    <Typography className='text'>School: Spring Valley</Typography>
                    <Typography className='text'>Time: 2018</Typography>
                </div>
                <div className='pane'>
                    <Typography className='header'>Skills</Typography>
                    <Typography className='text'><b className='star'>*</b> Active Listening</Typography>
                    <Typography className='text'><b className='star'>*</b> Reading Comprehension</Typography>
                    <Typography className='text'><b className='star'>*</b> Service Orientation</Typography>
                    <Typography className='text'><b className='star'>*</b> Critical Thinking </Typography>
                    <Typography className='text'><b className='star'>*</b> Judgement and Decision Making </Typography>
                    <Typography className='text'><b className='star'>*</b> Active Learning </Typography>
                    <Typography className='text'><b className='star'>*</b> Negotiation Skills</Typography>
                    <Typography className='text'><b className='star'>*</b> Relationship willing</Typography>
                    <Typography className='text'><b className='star'>*</b> Team leadership</Typography>
                    <Typography className='text'><b className='star'>*</b> Flexible</Typography>
                    <Typography className='text'><b className='star'>*</b> Reliable and dependable</Typography>
                    <Typography className='text'><b className='star'>*</b> Cheerful and Energetic</Typography>
                    <Typography className='text'><b className='star'>*</b> Energetic Work Attitude</Typography>
                    <Typography className='text'><b className='star'>*</b> Adaptive Team Player</Typography>
                    <Typography className='text'><b className='star'>*</b> Personnel Training and development</Typography>
                    <Typography className='text'><b className='star'>*</b> Detail-Orientated</Typography>
                    <Typography className='text'><b className='star'>*</b> Perfect Attendence Record</Typography>
                    <Typography className='text'><b className='star'>*</b> Excellent Time Management</Typography>
                    <Typography className='text'><b className='star'>*</b> High-End Fashion Knowledge</Typography>
                    <Typography className='text'><b className='star'>*</b> Cash Handling Accuracy</Typography>
                    <Typography className='text'><b className='star'>*</b>Dependable and Reliable</Typography>
                </div>
                <div className='pane'>
                    <Typography className='header'>Awards and Honor</Typography>
                    <Typography className='text'>Offensive MVP Freshman Season</Typography>                    
                </div>
            </div>
        );
    }
}