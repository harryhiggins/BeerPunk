import React from 'react';

export default function Card(props) {
    return(
    <div className="col" style={{height:'375px'}}>
        <div className="text-center h-50">
            <img className="card-img-top h-100" src={props.imageUrl} alt='' style={{width: 'auto'}} />
        </div>
        <div className="card-body d-flex flex-column h-50">
            <h5 className="card-title">{`${props.name} | ${props.abv}%`}</h5>
            <p className="card-text">{props.tagline}</p>
            <button type="button" onClick={props.selectBeer} className="btn btn-primary btn-block mt-auto">See details</button>
        </div>
    </div>);
}