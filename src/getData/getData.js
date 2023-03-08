const axios = require('axios')
const mapArrToStrings = require('../mapArrToStrings/mapArrToStrings');


async function getData () {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const userIds = response.data.map(user => user.id)
        return mapArrToStrings(userIds);
    } catch (e) {

    }
}

module.exports = getData;