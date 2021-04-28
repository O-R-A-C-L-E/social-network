//handle localStorage
export const setToLocalStorage = (string, user) => {
    localStorage.setItem(string, JSON.stringify(user));
}

export const getFromLocalStorage = (string) => {
    return JSON.parse(localStorage.getItem(string));
}



//encodeToken
const sha1 = require("js-sha1");

export const encodeToken = (username, password) => {
    sha1(`${username} ${password}`);
    const hash = sha1.create();
    hash.update(`${username} ${password}`);
    hash.hex();
    return hash.toString();
}
