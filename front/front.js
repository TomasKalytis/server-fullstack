'use strct';

const { response } = require("express");

console.log('front.js file was loaded');

const usersUrl = 'http://localhost:3001/api/users';

//parsisiusti userius ir iskonsolinti
async function getUsers() {
    try {
        const resp = await fetch(usersUrl);
        console.log('resp ===', resp);
        const usersData = await resp.json();
        console.log('usersData ===', usersData);
    } catch (error) {
        console.warn(error);
    }

    };

getUsers();