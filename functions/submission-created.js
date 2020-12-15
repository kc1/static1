    // https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget/

    require('dotenv').config();
    const fetch = require('node-fetch');
    // const https = require("https");

    // const fetch = request('node-fetch').default;
    // const fetch = require('node-fetch').default

    console.log('to here');
    const { LIST } = process.env;
    const { B } = process.env;

    // 1:52:15 PM: 2020-12-05T18:52:15.872Z	2107bd44-ece9-495a-afd7-b66502641175	INFO	undefined
    // 1:52:15 PM: Duration: 3.30 ms	Memory Usage: 67 MB	Init Duration: 164.43 ms	
    // 

        // 'lists[]': '175546'
          // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU4MTA5OWQ5NjI0MzU4YjMxNGQxOWI1MmE5NDJkMWZiM2I0NjQzODZkYmMzMGYwMzY2MmZjMDEzYjJjZDI1OGYyMWU5YjZkYmI4ZTllNzJmIn0.eyJhdWQiOiI0IiwianRpIjoiNTgxMDk5ZDk2MjQzNThiMzE0ZDE5YjUyYTk0MmQxZmIzYjQ2NDM4NmRiYzMwZjAzNjYyZmMwMTNiMmNkMjU4ZjIxZTliNmRiYjhlOWU3MmYiLCJpYXQiOjE2MDI3MjAzMzUsIm5iZiI6MTYwMjcyMDMzNSwiZXhwIjoxNjM0MjU2MzM1LCJzdWIiOiIzNDE1NSIsInNjb3BlcyI6W119.aPIpeO8toorud_EIGlvHdIqANIxblv7Pjhc8HyNldZgki-aCCDXUBSvrrsVR5bpP_XIAvw8n1M1loDT8Ag2JissJ5knFD-Jn1yKUzkL0SnkA6kymhFppo0ueO5kH7LUElBZWOUcqBmJse8uyQ1eEDDQvurxoKpcfLKgxXWUcFGdnqaTRGTnBW1oilG132LLH4N2rnZzKa27gNPj0cD2jSfaQuDGeZxyCgwl7rp2YKLjKcRR1lMA1fs4SCdbrulZeavr_KxcSMJvxDw-jAcsnQIGMUBgw_7Tekn3knJ5qctTdWB_yeoEXxsNpL2nQTy-Q_5n9oS4t6mHkNCEy4HQ6CQlgjqrDUWRzAgUGZ0bw9ngtGVuGo1H8J9_5YqET6REoX34E04vJHZgpdOy5IAC3fKaRA2aUBn0uUwuvHVFkSMr4gGPr2QGHdIyGDM5LFu9ypF9cgRWHI42BqhNEsL9xGk9epoMmku3wACnBLXxaN5v2MV6oaIVPq_rsdmtAI_oB2_5PbbjaaAY5rj6y5garzRxm7Svlv0OwsMWU6BlCrZO-v2bHGb3fdVcB__uJ8_19qvoH03ehY-EkKwRQg65EOSn6SqL624mIO38t-K7YLRso-S9_f9gSCkVyy9nVTS6uZEN3hHvRYhG7zWTTPiCaBDkxbfg4xDlgiQnsICvJMos',

    exports.handler = async event => {

      // EMAIL, ASKING

      console.log('hi');
      console.log(LIST);
      console.log(B);
      // const email = 'bill66666@mailinator.com';
      const email = JSON.parse(event.body).payload.data.EMAIL


      console.log(email);
      // const asking = '70000';
      const asking = JSON.parse(event.body).payload.data.ASKING
      // console.log(`Recieved a submission: ${email}`)

      console.log(asking);
      var formData = {
        'email': email,
        'first_name': '',
        'last_name': asking,
        'lists[]': '175546'
        // 'lists[]': LIST
      };
      var encoded = Object.entries(formData).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&");

      var endpoint = 'https://api.sendfox.com/contacts/?' + encoded;

      const data = JSON.stringify(formData);
      // const options = {

        // hostname: 'sendfox.com',
      // //   method: 'POST',
      // //   connection: 'keep-alive',

      // //   headers: {
      // //     'Authorization': B,
      // //     'Content-Type': 'application/json',
      // //   },
      // //   'content-length': data.length,

      // // };
      // // const { EMAIL_TOKEN } = process.env
      // exports.handler = async event => {
        // const email = JSON.parse(event.body).payload.email
        // console.log(`Recieved a submission: ${email}`)
        return fetch(endpoint, {
          method: 'POST',
          headers: {
            Authorization: B,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ formData }),
        })
          .then(response => response.json())
          .then(data => {
            console.log(`Submitted to Buttondown:\n ${data}`)
          })
          .catch(error => ({ statusCode: 422, body: String(error) }))
      // } 
    }