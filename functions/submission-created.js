// https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget/

// require('dotenv').config();
// const fetch = require('node-fetch');
const https = require("https");

// const fetch = request('node-fetch').default;
// const fetch = require('node-fetch').default

  console.log('to here');
// const { EMAIL_TOKEN } = process.env
// 1:52:15 PM: 2020-12-05T18:52:15.866Z	undefined	INFO	to here
// 1:52:15 PM: 2020-12-05T18:52:15.871Z	2107bd44-ece9-495a-afd7-b66502641175	INFO	{"payload":{"number":184,"title":"gift card recipient","email":"opes11@gmail.com","name":null,"first_name":null,"last_name":null,"company":null,"summary":"\u003cstrong\u003egift card recipient\u003c/strong\u003e ","body":null,"data":{"csrfmiddlewaretoken":"GgvBR3DfLuvCeKsnpD51fxBTRfOBwHJuVMcCWBFJtjrS4KNF24uL7pv70mORIsPK","TEMPLATE":"HOOP1","OWNERFULLNAME":"gift card recipient","PHONE":"5082965083","EMAIL":"opes11@gmail.com","OWNERSTREET":"67 Burbank Street","OWNERCITY":"Boston","OWNERSTATE":"MA","OWNERZIP":"02115","PROPFULLADDRESS":"67 Burbank Street","LEGALDESCRIPTION":"","ACCOUNT":"","COUNTY":"","ZIP":"","ASKING":"999","VALUE":"","WHY":"","DEED":"","PICTURES":"","USAGE":"","LISTED":"","ip":"216.49.157.83","user_agent":"Mozilla/5.0 (X11; CrOS x86_64 13421.102.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.199 Safari/537.36","referrer":"https://sellmylands.com/offer"},"created_at":"2020-12-05T18:52:14.819Z","human_fields":{"Csrfmiddlewaretoken":"GgvBR3DfLuvCeKsnpD51fxBTRfOBwHJuVMcCWBFJtjrS4KNF24uL7pv70mORIsPK","Template":"HOOP1","\n                Owner Name* ":"gift card recipient","\n                Owner Telephone* ":"5082965083","\n                Owner Email* ":"opes11@gmail.com","\n                Owner Street* ":"67 Burbank Street","\n                Owner City* ":"Boston","\n                Owner State* ":"MA","\n                Owner Zip Code\n            ":"02115","\n                The Property Address* ":"67 Burbank Street","\n                The Property Legal Description\n            ":"","\n                Appraisal or Tax District Property Number (APN)\n            ":"","\n                What County is the property in?\n            ":"","\n                Property Zip Code?\n            ":"","\n                What is your asking Price?\n            ":"999","\n                What is your estimated market value of the property?\n            ":"","\n                Why are you selling?\n            ":"","\n                Do you have the property's deed\n            ":"","\n                Do you have pictures of the property?\n            ":"","\n                Who would be interested in owning the property?\n            ":"","\n                Is the property currently listed with a Realtor\n            ":""},"ordered_human_fields":[{"title":"Csrfmiddlewaretoken","name":"csrfmiddlewaretoken","value":"GgvBR3DfLuvCeKsnpD51fxBTRfOBwHJuVMcCWBFJtjrS4KNF24uL7pv70mORIsPK"},{"title":"Template","name":"TEMPLATE","value":"HOOP1"},{"title":"\n                Owner Name* ","name":"OWNERFULLNAME","value":"gift card recipient"},{"title":"\n                Owner Telephone* ","name":"PHONE","value":"5082965083"},{"title":"\n                Owner Email* ","name":"EMAIL","value":"opes11@gmail.com"},{"title":"\n                Owner Street* ","name":"OWNERSTREET","value":"67 Burbank Street"},{"title":"\n                Owner City* ","name":"OWNERCITY","value":"Boston"},{"title":"\n                Owner State* ","name":"OWNERSTATE","value":"MA"},{"title":"\n                Owner Zip Code\n            ","name":"OWNERZIP","value":"02115"},{"title":"\n                The Property Address* ","name":"PROPFULLADDRESS","value":"67 Burbank Street"},{"title":"\n                The Property Legal Description\n            ","name":"LEGALDESCRIPTION","value":""},{"title":"\n                Appraisal or Tax District Property Number (APN)\n            ","name":"ACCOUNT","value":""},{"title":"\n                What County is the property in?\n            ","name":"COUNTY","value":""},{"title":"\n                Property Zip Code?\n            ","name":"ZIP","value":""},{"title":"\n                What is your asking Price?\n            ","name":"ASKING","value":"999"},{"title":"\n                What is your estimated market value of the property?\n            ","name":"VALUE","value":""},{"title":"\n                Why are you selling?\n            ","name":"WHY","value":""},{"title":"\n                Do you have the property's deed\n            ","name":"DEED","value":""},{"title":"\n                Do you have pictures of the property?\n            ","name":"PICTURES","value":""},{"title":"\n                Who would be interested in owning the property?\n            ","name":"USAGE","value":""},{"title":"\n                Is the property currently listed with a Realtor\n            ","name":"LISTED","value":""}],"id":"5fcbd6dea516f60cf280f47f","form_id":"5da8d6bd0371520007f56aa1","site_url":"https://sellmylands.com","form_name":"hoop1"},"site":{"id":"75743a70-a0eb-477f-8cd3-8e605621e848","site_id":"75743a70-a0eb-477f-8cd3-8e605621e848","plan":"nf_team_dev","ssl_plan":null,"premium":false,"claimed":true,"name":"inspiring-ardinghelli-4a4da5","custom_domain":"sellmylands.com","domain_aliases":[],"password":null,"notification_email":null,"url":"https://sellmylands.com","admin_url":"https://app.netlify.com/sites/inspiring-ardinghelli-4a4da5","deploy_id":"5fcbd6b0475e2500071828fd","build_id":"","deploy_url":"http://master--inspiring-ardinghelli-4a4da5.netlify.app","state":"current","screenshot_url":null,"created_at":"2018-09-04T20:21:36.986Z","updated_at":"2020-12-05T18:51:32.750Z","user_id":"5b8ee8d04ed62f2547ca03c6","error_message":null,"ssl":true,"ssl_url":"https://sellmylands.com","force_ssl":true,"ssl_status":null,"max_domain_aliases":100,"build_settings":{"cmd":null,"dir":null,"branch":"master","base":null,"env":{},"allowed_branches":["master"],"skip_prs":false,"untrusted_flow":"review","private_logs":true,"functions_dir":null,"stop_builds":false},"processing_settings":{"css":{"bundle":true,"minify":true},"js":{"bundle":true,"minify":true},"images":{"optimize":true},"html":{"pretty_urls":true},"skip":true,"ignore_html_forms":false},"prerender":"netlify","prerender_headers":null,"deploy_hook":"https://api.netlify.com/hooks/github","published_deploy":{"id":"5fcbd6b0475e2500071828fd","site_id":"75743a70-a0eb-477f-8cd3-8e605621e848","build_id":"5fcbd6af475e2500071828fb","state":"ready","name":"inspiring-ardinghelli-4a4da5","url":"https://sellmylands.com","ssl_url":"https://sellmylands.com","admin_url":"https://app.netlify.com/sites/inspiring-ardinghelli-4a4da5","deploy_url":"http://master--inspiring-ardinghelli-4a4da5.netlify.app","deploy_ssl_url":"https://master--inspiring-ardinghelli-4a4da5.netlify.app","created_at":"2020-12-05T18:51:28.017Z","updated_at":"2020-12-05T18:51:32.754Z","user_id":"5b8ee8d04ed62f2547ca03c6","error_message":null,"required":[],"required_functions":[],"commit_ref":"f4069267d654c48778c11a0188a01cfd72498a86","review_id":null,"branch":"master","commit_url":"https://github.com/kc1/static1/commit/f4069267d654c48778c11a0188a01cfd72498a86","skipped":null,"locked":null,"log_access_attributes":{"type":"firebase","url":"https://netlify-builds5.firebaseio.com/builds/5fcbd6af475e2500071828fb/log","endpoint":"https://netlify-builds5.firebaseio.com","path":"/builds/5fcbd6af475e2500071828fb/log","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjowLCJpYXQiOjE2MDcxOTQzMzUsImQiOnsidWlkIjoiIn19.OH8q8eHkY4DWABG3vkQegBoxKmmsN6BvigAMtPlXrN4"},"title":"jj","review_url":null,"published_at":"2020-12-05T18:51:32.629Z","context":"production","deploy_time":3,"available_functions":[{"n":"submission-created","d":"02924396e93a190e408a39b5cd961c22bfc2c0325f31201177ab32066173d81e","id":"572117c4918c373a1aad8bd346aa7d38394c69dde110834830326008c39d0158","a":"517001624662","c":"2020-12-05T18:51:32.122Z","r":"nodejs12.x","s":2186}],"screenshot_url":null,"site_capabilities":{"title":"Netlify Team Free","asset_acceleration":true,"form_processing":true,"cdn_propagation":"partial","build_node_pool":"buildbot-external-ssd","domain_aliases":true,"secure_site":false,"prerendering":true,"proxying":true,"ssl":"custom","rate_cents":0,"yearly_rate_cents":0,"ipv6_domain":"cdn.makerloop.com","branch_deploy":true,"managed_dns":true,"geo_ip":true,"split_testing":true,"id":"nf_team_dev","cdn_tier":"reg","forms":{"submissions":{"included":100,"unit":"submissions","used":18},"storage":{"included":10485760,"unit":"bytes","used":0}},"functions":{"invocations":{"included":125000,"unit":"requests","used":3},"runtime":{"included":360000,"unit":"seconds","used":1}}},"committer":"kc1","skipped_log":null,"manual_deploy":false,"file_tracking_optimization":true,"plugin_state":"none","has_edge_handlers":false,"links":{"permalink":"https://5fcbd6b0475e2500071828fd--inspiring-ardinghelli-4a4da5.netlify.app","alias":"https://sellmylands.com"}},"managed_dns":true,"jwt_secret":null,"jwt_roles_path":"app_metadata.authorization.roles","account_slug":"kc1","account_name":"kc1's team","account_type":"Starter","capabilities":{"title":"Netlify Team Free","asset_acceleration":true,"form_processing":true,"cdn_propagation":"partial","build_node_pool":"buildbot-external-ssd","domain_aliases":true,"secure_site":false,"prerendering":true,"proxying":true,"ssl":"custom","rate_cents":0,"yearly_rate_cents":0,"ipv6_domain":"cdn.makerloop.com","branch_deploy":true,"managed_dns":true,"geo_ip":true,"split_testing":true,"id":"nf_team_dev","cdn_tier":"reg","forms":{"submissions":{"included":100,"unit":"submissions","used":18},"storage":{"included":10485760,"unit":"bytes","used":0}},"functions":{"invocations":{"included":125000,"unit":"requests","used":3},"runtime":{"included":360000,"unit":"seconds","used":1}}},"dns_zone_id":null,"identity_instance_id":null,"use_functions":true,"use_edge_handlers":null,"parent_user_id":null,"automatic_tls_provisioning":null,"disabled":null,"lifecycle_state":"active","id_domain":"75743a70-a0eb-477f-8cd3-8e605621e848.netlify.app","use_lm":null,"build_image":null,"automatic_tls_provisioning_expired":false,"analytics_instance_id":null,"functions_region":null,"functions_config":{"site_created_at":"2018-09-04T20:21:36.986Z"},"plugins":[],"account_subdomain":null,"default_domain":"inspiring-ardinghelli-4a4da5.netlify.app"}}
// 1:52:15 PM: 2020-12-05T18:52:15.872Z	2107bd44-ece9-495a-afd7-b66502641175	INFO	undefined
// 1:52:15 PM: Duration: 3.30 ms	Memory Usage: 67 MB	Init Duration: 164.43 ms	
exports.handler = async event => {

  // EMAIL, ASKING

  console.log(event.payload.data);
  // const email = 'bob123@mailinator.com';
  const email = JSON.parse(event.body).payload.EMAIL


  console.log(email);
  // const asking = '70000';
  const asking = JSON.parse(event.body).payload.ASKING
  // console.log(`Recieved a submission: ${email}`)

  var formData = { 'email': email, 'first_name': '', 'last_name': asking, 'lists[]': '175546' };
  var encoded = Object.entries(formData).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&");
  var endpoint = 'https://api.sendfox.com/contacts/?' + encoded;
  return;

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