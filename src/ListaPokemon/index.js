import React, {useState} from "react";
import ItemPokemon from "../ItemPokemon";
import {axios} from 'axios';
import styles from './style.module.css';
import {Grid} from "@mui/material";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function ListaPokemon() {


    const [listaPoke, setListaPoke] = useState([]);

    var url = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

    const axios = require('axios');
    var listaPokemon = [];


    React.useEffect(() => {
        axios.get(url)
            .then(function (response) {
                setListaPoke(response.data.results);
            });
    }, []);

    const Item = styled(Paper)(({theme}) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <div className={styles.listaPokemon}>
            <Grid container spacing={2}>

                {listaPoke.map(({name, url}, index) => (
                    <Item>
                        <ItemPokemon
                            nomePokemon={name}
                            url={url}
                        />
                    </Item>

                ))}

            </Grid>
        </div>

    );
}