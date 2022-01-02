import React, {useState} from "react";
import Titulo from "../Titulo";
import styles from './style.module.css';
import ListaPokemon from "../ListaPokemon";
import {Container} from "@mui/material";


export default function PaginaPrincipal() {




    return (
        <div className="principal">

                <Titulo/>

                <Container maxWidth={"xl"}>
                    <ListaPokemon/>
                </Container>

        </div>
    );
}