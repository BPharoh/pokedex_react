import React from 'react';
import { Component } from 'react';

class Pokesingle extends Component {

    state  = {
        data: [],
        isLoading: false,

    };

    componentDidMount() {
        this.setState({
            isLoading: true });
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
        .then((res) => res.json())
        .then((data) => this.setState({ data: data, isLoading: false}));
    }
    render () {
        if (this.state.isLoading) {
            return <p>Loading. . . . . </p>
        }
        console.log(this.props.params.pokesingle);
        return (
            <div>
                <h2>{this.state.data.name}</h2>
                <img  src={this.state.data.sprites?.other.dream_world.front_default}
                      alt={this.state.data.name}
                />
            </div>
        );
    }

};



export default Pokesingle;