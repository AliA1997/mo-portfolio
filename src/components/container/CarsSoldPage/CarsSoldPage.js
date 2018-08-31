import React, { Component } from 'react';
//import material-ui components
import Typography from '@material-ui/core/Typography';
//import withROtuer to have access to this.props.history
import { withRouter } from 'react-router-dom';
//import presentational component whose responsibility is display jsx.
import CarCard from '../../presentational/CarCard/CarCard';
import Loading from '../../presentational/Loading/Loading';
//import css file for styling
import './CarsSoldPage.css';

class CarsSoldPage extends Component {
    constructor() {
        super();
        this.state = {
            cars_sold: [],
            laoding: true
        };
    }
    componentDidMount() {
        fetch('/api/cars_sold').then(response => response.json()).then(res => {
            this.setState({cars_sold: res.cars, loading: false});
        }).catch(err => console.log('Get Sold Cars Error----------', err));
    }
    linkFunc = (path) => {
        this.props.history.push(path);
    }
    render() {
        //Destruct cars_sold from state
        const { cars_sold, loading } = this.state;
        if(!loading) {
            return (
                <div className='container'>
                    <Typography className='cars-sold-header'>Cars Sold</Typography>
                    {cars_sold.length ? cars_sold.map(car => <CarCard key={car._id} {...car} linkFunc={this.linkFunc} />) : null}
                </div>
            );
        } else {
            return <Loading />
        }
    }
}

export default withRouter(CarsSoldPage);