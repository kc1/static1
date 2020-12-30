exports.handler = async function(event, context) {
  console.log(JSON.parse(event.body))
  console.log('hi');
  return {
    statusCode: 200,
    body: event.body
  };
};