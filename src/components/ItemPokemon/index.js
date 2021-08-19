import React, {useState} from "react";
import './style.css';
import {axios} from 'axios';

export default function ItemPokemon(props) {
    const [imagemPokemon,setImagemPokmeon] = useState("");
    const[abilidade,setAbilidade] = useState([]);

    const axios = require('axios');
    axios.get(props.url)
        .then(function ( response){

            setImagemPokmeon(response.data.sprites.front_default);
            setAbilidade(response.data.abilities);

        });
    


    return (
        <div className="itemBody">
            <h3>{props.nomePokemon}</h3>

           <img className="imgPokeon" src={imagemPokemon} alt={props.nomePokemon}/>

            {abilidade.map(({ability},index) => (
                <p>{ability.name}</p>
            ))}

        </div>


    );
}