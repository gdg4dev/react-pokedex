import React, { Component } from 'react';
import Pokedex from "./Pokedex";
class Pokegame extends Component {
    static defaultProps = {
        Pokemons: [
            { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
            { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
            { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
            { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
            { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
            { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
            { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
            { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
        ]
    }
    render(){
        let squad1 = [], squad2 = [...this.props.Pokemons]
        while(squad1.length < squad2.length) {
            let randomIndex = Math.floor(Math.random() * squad2.length)
            squad1.push(squad2.splice(randomIndex,1)[0])
        }
        let squad1Exp = squad1.reduce((exp, pokemon) => exp += parseInt(pokemon.base_experience),0)
        let squad2Exp = squad2.reduce((exp, pokemon) => exp += parseInt(pokemon.base_experience),0)
        return(
            <div>
                <Pokedex Pokemon={squad1} Exp={squad1Exp} isWinner={squad1Exp > squad2Exp}/>
                <Pokedex Pokemon={squad2} Exp={squad2Exp} isWinner={squad1Exp < squad2Exp}/>
            </div>
        )
    }
}

export default Pokegame