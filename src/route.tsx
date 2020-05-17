import React from 'react'
import { Switch, Route } from "react-router-dom";
import  Login  from './pages/Login';
import Dashboard from './pages/Home';

export const Router = () => {
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/">
                <Dashboard />
            </Route>
        </Switch>
    )
}