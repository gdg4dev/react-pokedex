import React, { Component } from 'react';
import Pokecard from './Pokecard'
import './Pokedex.css'

class Pokedex extends Component {
    render() {
        const { Exp, isWinner } = this.props
        return (
            <div className="Pokedex">
                <h1 className={isWinner ? 'Pokedex-winner' : 'Pokedex-loser'}>
                    {isWinner ? 'Winning Hand' : 'Losing Hand '}
                </h1>
                <h4> Total Experience: {Exp}</h4>
                <div className="Pokedex-cards">
                    {this.props.Pokemon.map(v => <Pokecard
                        id={v.id}
                        name={v.name}
                        type={v.type}
                        base_experience={v.base_experience}
                    />
                    )}
                </div>
            </div>
        )
    }
}

export default Pokedex