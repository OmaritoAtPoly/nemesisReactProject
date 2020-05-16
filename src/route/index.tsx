import React from 'react'
import { Switch, Route } from "react-router-dom";
import { Home } from '../container/home';
import { Login } from '../container/login';

export const Router = () => {
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}