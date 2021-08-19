import React, {useState} from "react";
import './style.css';
import Titulo from "../Titulo";
import ListaPokemon from "../ListaPokemon";

export default function PaginaPrincipal() {


    return (
        <div className="principal">
            <Titulo />

            <ListaPokemon />

        </div>
    );
}