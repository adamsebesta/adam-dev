const axios = require('axios');

const newRequest = (req, res) => {
// Requires npm install --save axios

var jsonData = {
        email: "a-valid@emailaddress.com",
        name: "AdamTest",
        task: "Hey Im testing my new logic app"
};

console.log(jsonData);

// (async function(data) {
//     try {
//         const response = await axios.post(process.env.LOGIC_APP_URL, jsonData);
//         console.log(response.status);
//     } catch (error) {
//         console.log(error);
//     }
// })(jsonData);
  
}
module.exports.newRequest = newRequest;