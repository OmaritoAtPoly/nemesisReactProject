import React from 'react'
import { Switch, Route } from "react-router-dom";
import  Login  from '../container/Login';
import { Home } from '../container/Home';

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