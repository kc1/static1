// https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget/

require('dotenv').config();
const fetch = require('node-fetch');
// const https = require("https");

// const fetch = request('node-fetch').default;
// const fetch = require('node-fetch').default

console.log('to here');
console.log('to here');
const {
  LIST
} = process.env;
const {
  B
} = process.env;


exports.handler = async event => {

  // EMAIL, ASKING

  console.log('hi');
  console.log('hi');
  console.log(LIST);
  console.log(B);
  // const email = 'jbill6666766@mailinator.com';
  const email = JSON.parse(event.body).payload.data.EMAIL


  console.log(email);
  // const asking = '70000';
  const asking = JSON.parse(event.body).payload.data.ASKING.toString();
  // console.log(`Recieved a submission: ${email}`)

  console.log(asking);
  var formData = {
    'email': email,
    'first_name': '',
    'last_name': asking,
    'lists[]': LIST
  };
  var encoded = Object.entries(formData).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&");

  var endpoint = 'https://api.sendfox.com/contacts/?' + encoded;

  return fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: B,
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({
        // formData
      // }),
    })
    .then(response => response.json())
    .then(formData => {
      console.log(`Submitted to api:\n ${formData}`);
    return {
        statusCode: 200
      }
    })
    .catch(error => ({
      statusCode: 422,
      body: String(error)
    }))
  // } 
  // console.log('resp ');
  // console.log(resp);


}