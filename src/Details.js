import React, { Component } from 'react';

export default function Details(props) {
    return (
        <div className="row">
            <div className="col-sm">
                <div className="text-center">
                    <img className="card-img-top" src={props.imageUrl} alt="Card image cap" style={{height: "400px", width: "auto"}}/>
                </div>
            </div>
            <div className="col-sm">
                <h1>{props.name}</h1>
                <p className="lead">
                    {props.tagline}
                </p>
                <p>
                    {props.description}
                </p>
            </div>
            <div className="col-sm">
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">ABV</th>
                            <td>{`${props.abv}%`}</td>
                        </tr>
                        <tr>
                            <th scope="row">IBU</th>
                            <td>{props.ibu}</td>
                        </tr>
                        <tr>
                            <th scope="row">EBC</th>
                            <td>{props.ebc}</td>
                        </tr>
                        <tr>
                            <th scope="row">SRM</th>
                            <td>{props.srm}</td>
                        </tr>
                        <tr>
                            <th scope="row">PH</th>
                            <td>{props.ph}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        );
}