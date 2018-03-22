import React from 'react';
import picOne from '../images/pic2.jpg';

const Card = props => (
    <div class="column-3">
        <h4 className="category">{props.category}</h4>

        <div className="card">
            <div className="card__header">
                <img className="card__header--image" src={props.image} alt=""/>
                <img class="card__header--avatar" src={props.image} alt=""/>
            </div>

            <div className="card__content">
                <h4 className="card__content--title">
                    {props.title}
                </h4>

                <div className="card__content--owner">
                    by {props.owner}
                </div>

                <div className="card__content--details">
                    {props.details ? props.details : props.albumDate  }
                </div>
            </div>

            <div className="card__action">
                <button>view store</button>
            </div>
        </div>
    </div>
);

export default Card;