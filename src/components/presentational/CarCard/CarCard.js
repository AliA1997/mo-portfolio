import React from 'react';
//import PropTypes 
import PropTypes from 'prop-types';
//import material-ui components
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//import css file for styling
import './CarCard.css';

const CarCard = props => {
    const {_id, images, year, make, model, time_sold } = props;
    return (
        <Card className='car-card'>
            <CardHeader 
            avatar={<Avatar src={images[0].image} alt="car" style={{height: '5em', width: '5em'}}/>}
            title={`${year} ${make} ${model}`}
            />
            <CardContent>
                <Typography component='h4'>{year} {make} {model}</Typography>
                <Typography component='h4'>Date Sold: {time_sold}</Typography>
            </CardContent>
            <Button color="primary" variant="outlined" onClick={() => props.linkFunc(`/cars_sold/${_id}`)}>See Details</Button>
        </Card>
    );
}

CarCard.propTypes = {
    _id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.stri
    }))
}

export default CarCard;