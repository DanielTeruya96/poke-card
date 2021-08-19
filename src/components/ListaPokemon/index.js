import React, {useState} from "react";
import './style.css';
import ItemPokemon from "../ItemPokemon";
import {axios} from 'axios';


export default function ListaPokemon() {

    const[listaPoke,setListaPoke] = useState([]);

    var url = "https://pokeapi.co/api/v2/pokemon?limit=12&offset=1";

    const axios = require('axios');
    var listaPokemon = [];
    axios.get(url)
        .then(function (response){
            setListaPoke(response.data.results);
        });




    return (
        <div className="listaPokemon">



            {listaPoke.map(({name, url},index) => (
              <ItemPokemon
                    nomePokemon={name}
                    url={url}
              />

            ))}



        </div>
    );
}