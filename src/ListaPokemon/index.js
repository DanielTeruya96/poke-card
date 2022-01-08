import React, {useState} from "react";
import ItemPokemon from "../ItemPokemon";
import {axios} from 'axios';
import {Grid} from "@mui/material";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Box} from "@mui/material";

export default function ListaPokemon() {


    const [listaPoke, setListaPoke] = useState([]);

    var url = "https://pokeapi.co/api/v2/pokemon?limit=15&offset=0";

    const axios = require('axios');


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
        <div>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 2, sm: 8, md: 12}}>

                    {listaPoke.map(({name, url}) => (
                        <Grid item xs={4} sm={4} md={4}>
                            <Item>
                                <ItemPokemon
                                    nomePokemon={name}
                                    url={url}
                                />
                            </Item>
                        </Grid>

                    ))}

                </Grid>
            </Box>
        </div>

    );
}