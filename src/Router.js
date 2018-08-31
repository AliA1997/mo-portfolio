import React, { Component } from 'react';
//import CSSTransition for each individual route, and transiontGroup for all your routes. 
//Have it set to a fade, and then also have the key of the transition be the location.key
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//Also import withRouter to have access to location props.
import { withRouter, Switch, Route } from 'react-router-dom';
//import components for your routes.
import Home from './components/container/Home/Home';
import CarsSoldPage from './components/container/CarsSoldPage/CarsSoldPage';
import CarPage from './components/container/CarPage/CarPage';
import ContactPage from './components/container/ContactPage/ContactPage';

class Router extends Component {
    render() {
        return (
            <TransitionGroup className='transition-group'>
                <CSSTransition 
                key={this.props.location.key}
                classNames='fade'
                timeout={{enter: 1200, exit: 100}}
                >   
                    <div className='route-section'>
                        <Switch location={this.props.location}>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/cars_sold' component={CarsSoldPage} />
                            <Route path='/cars_sold/:id' component={CarPage} />
                            <Route path='/contact' component={ContactPage} />
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}

//Export the Router 
export default withRouter(Router);