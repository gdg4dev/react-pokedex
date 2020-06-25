import React, { Component } from "react";
import  './Pokecard.css'
const pokeImageAPI = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
class Pokecard extends Component {
    render() {
        const {id, name, type, base_experience} = this.props
        const padToThree = num => num >= 999 ? num : `00${num}`.slice(-3)
        let pokeImage = `${pokeImageAPI}${padToThree(id)}.png`
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-name">{name}</h1>
                <img className="Pokecard-img" src={pokeImage} alt={name}/>
                <div className="Pokecard-data">Type: {type}</div>
                <div className="Pokecard-data">EXP: {base_experience}</div>
            </div>
        );
    }
}

export default Pokecard;
