import React, {useState} from "react";
import styles from './style.module.css';
import {Grid} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {green, orange} from '@mui/material/colors';
import {axios} from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Divider, makeStyles} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import Image from 'next/image';

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: 12,
        minWidth: 256,
        textAlign: 'center',
    },
    header: {
        textAlign: 'center',
        spacing: 10,
    },
    list: {
        padding: '20px',
    },
    action: {
        display: 'flex',
        justifyContent: 'space-around',
    },
}));

const innerTheme = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
    },
});


export default function ItemPokemon(props) {
    const [imagemPokemon, setImagemPokmeon] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/201.png");
    const [abilidade, setAbilidade] = useState([]);

    const classes = useStyles();

    const axios = require('axios');

    React.useEffect(() => {
        axios.get(props.url)
            .then(function (response) {

                setImagemPokmeon(response.data.sprites.front_default);
                setAbilidade(response.data.abilities);

            });
    }, []);


    return (


        <Card sx={{}} className={classes.root}>
            <CardHeader title={props.nomePokemon} className={classes.header}/>
            <Divider variant="middle"/>
            <CardContent>
                <Image src={imagemPokemon} alt={props.nomePokemon}
                       width={150}
                       height={150}/>


                <div className={classes.list}>
                    {abilidade.map(({ability}, index) => (
                        <Typography align="center">{ability.name}</Typography>
                    ))}
                </div>
            </CardContent>
            <Divider variant="middle"/>
            <CardActions className={classes.action}>
                <Button variant="contained" color="primary">
                    INFO
                </Button>
            </CardActions>
        </Card>


    );
}