// https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget/

// require('dotenv').config();
const fetch = require('node-fetch');
// const { EMAIL_TOKEN } = process.env
exports.handler = async event => {

  // EMAIL, ASKING

  // const email = 'bob123@mailinator.com';
  const email = JSON.parse(event.body).payload.EMAIL
  // const asking = '70000';
  const asking = JSON.parse(event.body).payload.ASKING
  console.log(`Recieved a submission: ${email}`)

  var formData = { 'email': email, 'first_name': '', 'last_name': asking, 'lists[]': '175546' };
  var encoded = Object.entries(formData).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&");
  var endpoint = 'https://api.sendfox.com/contacts/?' + encoded;

  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU4MTA5OWQ5NjI0MzU4YjMxNGQxOWI1MmE5NDJkMWZiM2I0NjQzODZkYmMzMGYwMzY2MmZjMDEzYjJjZDI1OGYyMWU5YjZkYmI4ZTllNzJmIn0.eyJhdWQiOiI0IiwianRpIjoiNTgxMDk5ZDk2MjQzNThiMzE0ZDE5YjUyYTk0MmQxZmIzYjQ2NDM4NmRiYzMwZjAzNjYyZmMwMTNiMmNkMjU4ZjIxZTliNmRiYjhlOWU3MmYiLCJpYXQiOjE2MDI3MjAzMzUsIm5iZiI6MTYwMjcyMDMzNSwiZXhwIjoxNjM0MjU2MzM1LCJzdWIiOiIzNDE1NSIsInNjb3BlcyI6W119.aPIpeO8toorud_EIGlvHdIqANIxblv7Pjhc8HyNldZgki-aCCDXUBSvrrsVR5bpP_XIAvw8n1M1loDT8Ag2JissJ5knFD-Jn1yKUzkL0SnkA6kymhFppo0ueO5kH7LUElBZWOUcqBmJse8uyQ1eEDDQvurxoKpcfLKgxXWUcFGdnqaTRGTnBW1oilG132LLH4N2rnZzKa27gNPj0cD2jSfaQuDGeZxyCgwl7rp2YKLjKcRR1lMA1fs4SCdbrulZeavr_KxcSMJvxDw-jAcsnQIGMUBgw_7Tekn3knJ5qctTdWB_yeoEXxsNpL2nQTy-Q_5n9oS4t6mHkNCEy4HQ6CQlgjqrDUWRzAgUGZ0bw9ngtGVuGo1H8J9_5YqET6REoX34E04vJHZgpdOy5IAC3fKaRA2aUBn0uUwuvHVFkSMr4gGPr2QGHdIyGDM5LFu9ypF9cgRWHI42BqhNEsL9xGk9epoMmku3wACnBLXxaN5v2MV6oaIVPq_rsdmtAI_oB2_5PbbjaaAY5rj6y5garzRxm7Svlv0OwsMWU6BlCrZO-v2bHGb3fdVcB__uJ8_19qvoH03ehY-EkKwRQg65EOSn6SqL624mIO38t-K7YLRso-S9_f9gSCkVyy9nVTS6uZEN3hHvRYhG7zWTTPiCaBDkxbfg4xDlgiQnsICvJMos',
      'Content-Type': 'application/json',
    }
    // body: JSON.stringify({ email }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted to Sendfox:\n ${data}`)
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
}

function sfapi(ep, options) { // this should come from setting new to pending - this should also set up new row.

  var baseOptions = {
    'contentType': 'application/json',
    'headers': { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU4MTA5OWQ5NjI0MzU4YjMxNGQxOWI1MmE5NDJkMWZiM2I0NjQzODZkYmMzMGYwMzY2MmZjMDEzYjJjZDI1OGYyMWU5YjZkYmI4ZTllNzJmIn0.eyJhdWQiOiI0IiwianRpIjoiNTgxMDk5ZDk2MjQzNThiMzE0ZDE5YjUyYTk0MmQxZmIzYjQ2NDM4NmRiYzMwZjAzNjYyZmMwMTNiMmNkMjU4ZjIxZTliNmRiYjhlOWU3MmYiLCJpYXQiOjE2MDI3MjAzMzUsIm5iZiI6MTYwMjcyMDMzNSwiZXhwIjoxNjM0MjU2MzM1LCJzdWIiOiIzNDE1NSIsInNjb3BlcyI6W119.aPIpeO8toorud_EIGlvHdIqANIxblv7Pjhc8HyNldZgki-aCCDXUBSvrrsVR5bpP_XIAvw8n1M1loDT8Ag2JissJ5knFD-Jn1yKUzkL0SnkA6kymhFppo0ueO5kH7LUElBZWOUcqBmJse8uyQ1eEDDQvurxoKpcfLKgxXWUcFGdnqaTRGTnBW1oilG132LLH4N2rnZzKa27gNPj0cD2jSfaQuDGeZxyCgwl7rp2YKLjKcRR1lMA1fs4SCdbrulZeavr_KxcSMJvxDw-jAcsnQIGMUBgw_7Tekn3knJ5qctTdWB_yeoEXxsNpL2nQTy-Q_5n9oS4t6mHkNCEy4HQ6CQlgjqrDUWRzAgUGZ0bw9ngtGVuGo1H8J9_5YqET6REoX34E04vJHZgpdOy5IAC3fKaRA2aUBn0uUwuvHVFkSMr4gGPr2QGHdIyGDM5LFu9ypF9cgRWHI42BqhNEsL9xGk9epoMmku3wACnBLXxaN5v2MV6oaIVPq_rsdmtAI_oB2_5PbbjaaAY5rj6y5garzRxm7Svlv0OwsMWU6BlCrZO-v2bHGb3fdVcB__uJ8_19qvoH03ehY-EkKwRQg65EOSn6SqL624mIO38t-K7YLRso-S9_f9gSCkVyy9nVTS6uZEN3hHvRYhG7zWTTPiCaBDkxbfg4xDlgiQnsICvJMos' },
    'muteHttpExceptions': true,
  };

  var allOptions = { ...options, ...baseOptions };
  var endpoint = 'https://api.sendfox.com/' + ep;

  return UrlFetchApp.fetch(endpoint, allOptions); // Message/?limit=5

}





function addToSendfoxList() {

}



function me() {

  var options = { 'method': 'get' };
  var rsp = sfapi('me', options)
  Logger.log(rsp);

}

function campaigns() {

  var options = { 'method': 'get' };
  var rsp = sfapi('campaigns', options);
  Logger.log(rsp);

}

function getLists() {

  var options = { 'method': 'get' };
  var rsp = sfapi('lists', options);
  Logger.log(rsp);

}

function createContact(email, first_name, last_name, lists) {

  var formData = { 'email': email, 'first_name': first_name, 'last_name': last_name, 'lists[]': lists };
  var encoded = Object.entries(formData).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&");
  var ep1 = 'contacts/?' + encoded;

  var options = { 'method': 'post' };

  var rsp = sfapi(ep1, options);
  Logger.log(rsp);
  return rsp;

}

function createContactTest() {

  var rr = createContact("mytest1@mailinator.com", 'rr', 'gg', '175546')
  Logger.log(rr);


}