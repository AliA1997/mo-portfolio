import React, { Component } from 'react';
//import PropTypes 
import PropTypes from 'prop-types';
//import button from material-ui 
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import css file for styling
import './Slideshow.css';

export default class Slideshow extends Component {
    constructor() {
        super();
        this.state = {
            slideIndex: 0
        }
    }
    componentWillUnmount() {
        clearTimeout();
    }
    nextImage(e) {
        const { slideIndex } = this.state;
        const { slides } = this.props;
        //prevent the default behavior of the button therefore prevent the page from refreshing
        e.preventDefault();
        const newIndex = slideIndex + 1;
        this.setState({slideIndex: newIndex > (slides.length - 1) ? 0 : newIndex});

    }
    previousImage(e) {
        const { slideIndex } = this.state;
        const { slides } = this.props;
        //Prevent the default Event of the button therefore preventing the page from refreshing
        e.preventDefault();
        const newIndex = slideIndex - 1;
        this.setState({slideIndex: newIndex < 0 ? slides.length - 1 : newIndex})
    }
    clickImage(e, image) {
        //Prevent default behavior to prevent page refresh
        e.preventDefault();
        //Destruct slides from props.
        const { slides } = this.props;
        let indexOfImageClicked = slides.findIndex(slide => slide.image === image);
        this.setState({slideIndex: indexOfImageClicked})
    }
    render() {
        const { slides, position } = this.props;
        const { slideIndex } = this.state;
        const newIndex = this.state.slideIndex + 1;
        setTimeout(() => {
            return this.setState({slideIndex: newIndex > (slides.length - 1) ? 0 : newIndex})
        }, 5000);
        return (
            <div className='slideshow-container'>
                <div className='slideshow-div'>

                    <img src={slides[slideIndex].image} alt='Slide' />
                    {slides.length ? slides.map((slide, i) => slide === slides[slideIndex] && <Typography className='caption' key={i}>{slide.caption}</Typography>) : null}
                </div>
                <Button className='arrow-button-1' onClick={(e) => this.previousImage(e)} style={{top: position && `${position}%`}}>{`<`}</Button>
                <Button className='arrow-button-2' onClick={(e) => this.nextImage(e)} style={{top: position && `${position}%`}}>{`>`}</Button>
                <div className='slides-div'>
                    {slides.length ? slides.map((slide, i) => <img key={i} src={slide.image} style={{transition: 'opacity 500ms',opacity: slides[slideIndex].image === slide.image ? '1' : '0.5'}}
                                                                onClick={(e) => this.clickImage(e, slide.image)}/>) : null}
                </div>
            </div>
        );
    }
}

Slideshow.defaultProps = {
    position: null
}
//Define your proptypes
 Slideshow.propTypes = {
     slides: PropTypes.arrayOf(PropTypes.shape({
         image: PropTypes.string.isRequired,
         caption: PropTypes.string.isRequired   
     })).isRequired,
     position: PropTypes.number
 }