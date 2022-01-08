import React, {useState} from "react";
import {axios} from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Divider, makeStyles} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import Image from 'next/image';
import PokemonDialog from "../PokemonDialog";



const useStyles = makeStyles( ({
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


export default function ItemPokemon(props) {
    const [imagemPokemon, setImagemPokmeon] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/201.png");
    const [abilidade, setAbilidade] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [pokemon, setPokemon] = useState({"name":"unknown","order":"0"});


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    const axios = require('axios');

    React.useEffect(() => {
        axios.get(props.url)
            .then(function (response) {

                setImagemPokmeon(response.data.sprites.front_default);
                setAbilidade(response.data.abilities);
                setPokemon(response.data);

            });
    }, []);


    return (


        <Card sx={{}} className={classes.root}>

            <CardHeader title={'#'+pokemon.order+' '+pokemon.name}   className={classes.header}/>
            <Divider variant="middle"/>
            <CardContent>
                <Image src={imagemPokemon} alt={props.nomePokemon}
                       width={225}
                       height={225}/>


                <div className={classes.list}>
                    {abilidade.map(({ability}) => (
                        <Typography align="center">{ability.name}</Typography>
                    ))}
                </div>
            </CardContent>
            <Divider variant="middle"/>
            <CardActions className={classes.action}>
                <Button variant="contained" color="primary" onClick={handleClickOpen} >
                    INFO
                </Button>
                <PokemonDialog
                    selectedValue={pokemon}
                    open={open}
                    onClose={handleClose}
                />
            </CardActions>
        </Card>


    );
}