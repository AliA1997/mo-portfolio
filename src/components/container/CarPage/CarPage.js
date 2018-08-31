import React, { Component } from 'react';
//import components neeeded
import Slideshow from '../Slideshow/Slideshow';
import Loading from '../../presentational/Loading/Loading';
//import material ui componetns
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//improt CSSTransition from react-transition-group
import { CSSTransition } from 'react-transition-group';
//import css file for styling
import './CarPage.css';


export default class CarPage extends Component {
    constructor() {
        super();
        this.state = {
            currentCar: [],
            showDescription: false,
            loading: true
        }
    }
    //find the car by id 
    componentDidMount() {
        fetch(`/api/cars_sold/${this.props.match.params.id}`).then(res => res.json()).then(resJSON => {
            // console.log(resJSON);
            this.setState({currentCar: resJSON.car, loading: false});
        }).catch(err => console.log("Get Car Error---------", err));
    }
    render() {
        //Destruct the neeeded state that will render from the state.
        const { currentCar, loading, showDescription } = this.state;
        console.log(currentCar.images);
        if(!loading) {
            return (
                <div className='container'>
                    <Typography className='car-header' style={{marginBottom: '10%', backgroundColor: 'blue', fontSize: '3em', textAlign: 'center'}}>
                        {currentCar.year} {currentCar.make} {currentCar.model}
                    </Typography>
                    <div className='images'>
                        {currentCar.images && currentCar.images.length ? <Slideshow slides={currentCar.images} position={50}/> : null}
                    </div>
                    <Typography className='header'>Details of Sale</Typography>
                    <Typography className='header'>Date Sold: {currentCar.time_sold}</Typography>
                    <Typography className='header'>Price Sold: {currentCar.sold_at}</Typography>
                    <Typography className='header'>Year: {currentCar.year}</Typography>
                    <Typography className='header'>Make: {currentCar.make}</Typography>
                    <Typography className='header'>Model: {currentCar.model}</Typography>
                    <Button className='show-description-btn' variant='contained' onClick={() => this.setState({showDescription: !this.state.showDescription})}>
                        Show Description
                    </Button>
                    <Typography style={{display: showDescription ? 'block' : 'none' , border: 'solid 2px dashed'}}>
                        {currentCar.description && currentCar.description.map((line, i)=> <Typography key={i}>{line}</Typography>)}
                    </Typography>
                </div>
            );
        } else {
            return  <Loading />
        }
    }
}