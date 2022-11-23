import React from 'react';
import classes from './Card.module.css';
import { Link } from  'react-router-dom';

const Card = (props) => {
    return (
        <div className={classes.cardContainer}>
            <img src={props.image} alt={props.name} />
            <h2>{`${props.name.charAt(0).toUpperCase() + props.name.slice(1)}`}</h2> 
            <Link to={`${props.name}`}>See more</Link>
        </div>
    );
};

export default Card;