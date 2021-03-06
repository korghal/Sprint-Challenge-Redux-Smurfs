import React from 'react';
import {connect} from 'react-redux';

import {deleteSmurf} from '../actions/index';
import Form from './Form';

const SmurfCard = props => {
    const callDeleteSmurf = e => {
        e.preventDefault();
        props.deleteSmurf(props.smurf.id);
    }

    // Added an id to Brainey in the server to fix him.
    return (
        <div className='smurf-card'>
            <button onClick={callDeleteSmurf}>Delete</button>
            <div>Name:{props.smurf.name}</div>
            <div>Age: {props.smurf.age}</div>
            <div>Height: {props.smurf.height}</div>
            <Form type='Update Smurf' id={props.smurf.id} />
        </div>
    )
}

const mapStateToProps = () => {
    return {}
}
export default connect(mapStateToProps, {deleteSmurf})(SmurfCard);