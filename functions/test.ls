    const https = require("https");

    exports.handler = async event => {

    const email = JSON.parse(event.body).payload.data.EMAIL
    const asking = JSON.parse(event.body).payload.data.ASKING

    var formData = {
        'email': email,
        'first_name': '',
        'last_name': asking,
        'lists[]': 'NUM'
    };
    var encoded = Object.entries(formData).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&");

    var endpoint = 'https://api.sendfox.com/contacts/?' + encoded;

    const data = JSON.stringify(formData);
    const options = {

        method: 'POST',
        connection: 'keep-alive',

        headers: {
        'Authorization': 'Bearer hhhhh',
        'Content-Type': 'application/json',
        },
        'content-length': data.length,

    };
    console.log(email);

    const req = https.request(endpoint, options, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

        res.on('data', (d) => {
        console.log(d);
        });
    });

    req.on('error', (e) => {
        console.error(e);
    });

    req.write(data);
    req.end();

    return {
        statusCode: 200,
        body: data
    };
    }