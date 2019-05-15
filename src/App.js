import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Card from './Card.js';
import Details from './Details.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            beers: [],
            searchedBy: null,
            beerSelected: null,
        };
    }

    componentWillMount() {
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(
            (beers) => {
            this.setState({
                isLoaded: true,
                beers
            });
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        );
    }

    selectBeer = (beer) => {
        console.log('BEER SELECTED')
        this.setState({
            ...this.state,
            beerSelected: beer,
        })
    }

    unselectBeer = () => {
        console.log('BEER UNSELECTED')
        this.setState({
            ...this.state,
            beerSelected: null,
        })
    }

    renderBeersGrid() {
        const beerList = this.state.beers;
        let beerCardRows = [];

        // loop through data array until empty
        while (beerList.length > 0) {
            let beerDataArray = []

            // create array of 3 card components
            for (let i = 0; i < 3; i++) {
                if (beerList[0]) {
                    beerDataArray[i] = beerList.shift();
                }
            }

            // create card components
            let beerCards = beerDataArray.map((beerData, index) => {
                return (
                <Card
                    selectBeer={() => this.selectBeer(beerData)}
                    imageUrl={beerData.image_url}
                    name={beerData.name}
                    abv={beerData.abv}
                    tagline={beerData.tagline}
                />);
             });

            // create row of card components and push to array of rows
            beerCardRows.push(
            <div className="d-flex flex-row">
               {beerCards}
            </div>);
        }

        return beerCardRows.map(beerCardRow => {
            return beerCardRow;
        })
    }

    renderBeerDetails() {
        const beerData = this.state.beerSelected;
        return (
            <Details
                imageUrl={beerData.image_url}
                name={beerData.name}
                description={beerData.description}
                tagline={beerData.tagline}
                abv={beerData.abv}
                ibu={beerData.ibu}
                ebc={beerData.ebc}
                srm={beerData.srm}
                ph={beerData.ph}
            />
        )
    }

    render() {
        return (
        <div>
            <Header />
            <div className="container">
                {this.state.isLoaded && !this.state.error ? this.renderBeersGrid() : <h1>Loading...</h1>}
                {this.state.isLoaded && this.state.error && <h1 className="text-danger">Heck! Error getting beer...</h1>}
                {this.state.isLoaded && !this.state.error && this.state.beerSelected && this.renderBeerDetails()}
            </div>
        </div> 
    );
  }
}

export default App;
