import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container">
                        <span className="navbar-brand mb-0 h1" style={{ fontSize: '3em' }}>Beer Punk</span>
                    </div>
                </nav>
                <nav className="navbar navbar-light bg-light" style={{marginBottom: '15px'}}>
                    <div className="container">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search by Name" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;