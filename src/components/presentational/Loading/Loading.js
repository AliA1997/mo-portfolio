import React from 'react';
import Fade from "@material-ui/core/Fade";
import CircularProgress from '@material-ui/core/CircularProgress';
//import css file for styling
import './Loading.css';

const Loading = (props) => {
    return (
        // <Fade 
        // in={props.loading}
        // style={{
        //     transitionDelay: props.loading ? '800ms' : '0ms',
        //   }}
        //   unmountOnExit>
        <div className='loader'>
        <CircularProgress className='loading'/>
        </div>
        // </Fade>
    );
};

export default Loading;