import jwt from 'jsonwebtoken';
import { users } from './mochData';
import secretKey from './secret';


let userData: any = undefined
const secretWord = secretKey();

export const isValidUser = (userName: string, userKeyword: any) => {

        const index = users.findIndex(user => (user.name === userName && user.keyword === userKeyword))
        if (index > -1) {
                userData = users[index]
        }
        return index;
}

export const userSignIn = () => {
        if (userData !== undefined) {
                const token = jwt.sign({ userData }, secretWord, { expiresIn: 300000 })
                if (token) { localStorage.setItem("isLogged", token) }
        }
}
export const getCurrentUser = () => {
        const token = localStorage.getItem("isLogged");

        if (token) {
                const currentUser = jwt.verify(token, secretWord);
                return currentUser;
        }
}


export const userLogOut = () => {
        localStorage.setItem("isLogged", "");
}

