import { compareSync } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { users } from './mochData';

let userData: any = undefined
const secretWord = process.env.REACT_APP_SECRET

export const isValidUser = (userName: any, userKeyword: any) => {
        const keyWordString = String(userKeyword); 
        let isTrue = false;
        for (let i = 0; i < users.length; i++) {
                if ((userName === users[i].name) && (compareSync(keyWordString, users[i].keyword))) {
                        isTrue = true;
                        userData = users[i];
                        break;
                }
        }
        return isTrue;
}

export const userSignIn = () => {
        const userPayload = {
                id: userData.id,
                name:userData.name,
                roll:userData.roll
        }
        if (userData !== undefined && userPayload !== undefined) {
                const token = jwt.sign({ userPayload }, secretWord!, { expiresIn: 300000 })
                if (token) { localStorage.setItem("isLogged", token) }
        }
}
export const getCurrentUser = () => {
        const token = localStorage.getItem("isLogged");

        if (token) {
                const currentUser = jwt.verify(token, secretWord!);
                return currentUser;
        }
}

export const userLogOut = () => {
        localStorage.removeItem('isLogged');
        userData = undefined;
}

