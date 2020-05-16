import { useState } from 'react';
import { users } from './mochData'
import jwt from 'jsonwebtoken';
import secretKey from './secret';

const secretWord = secretKey();
const [logged, setLogged] = useState(false);

export const isValidUser = (userName: string, userKeyword: any) => {
        const isValid = users.map(user => ((user.name == userName && user.keyword == userKeyword)));
        isValid ? true : false;
}

export const userSignIn = () => {
        setLogged(true);
        const payload = { check: logged };
        const token = jwt.sign(payload, secretWord, { expiresIn: 300000 })

        if (token) { localStorage.setItem("isLogged", token); }
}

export const logOut = () => {
        setLogged(false);
        localStorage.setItem("isLogged", "");
}
