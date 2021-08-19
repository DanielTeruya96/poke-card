import React, {useState} from "react";
import './style.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PaginaPrincipal from "../PaginaPrincipal";

export default function Rota() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component = {PaginaPrincipal} />

            </Switch>
        </BrowserRouter>
    );
}