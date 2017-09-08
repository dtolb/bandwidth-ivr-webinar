/* Requirements */
const Bandwidth  = require('node-bandwidth');
const express    = require('express');
const bodyParser = require('body-parser');
let app          = express();
const http       = require('http').Server(app);

/* Paths */
const INCOMING_CALL = '/incoming-call-endpoint';
const IVR_CHOICE = '/ivr-choice-endpoint';
const {handleIncomingCall, handleGatherEvent} = require('./routes.js');


/* Express Setup */
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3000));

app.get(INCOMING_CALL, handleIncomingCall);
app.get(IVR_CHOICE, handleGatherEvent);

const bw = new Bandwidth({
    // uses my environment variables
    userId    : process.env.BANDWIDTH_USER_ID,
    apiToken  : process.env.BANDWIDTH_API_TOKEN,
    apiSecret : process.env.BANDWIDTH_API_SECRET
});

/* Launch the Server */
http.listen(app.get('port'), function(){
    console.log('listening on *:' + app.get('port'));
});