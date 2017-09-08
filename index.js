/* Requirements */
const Bandwidth  = require('node-bandwidth');
const express    = require('express');
const bodyParser = require('body-parser');
let app          = express();
const http       = require('http').Server(app);

/* Paths */
const INCOMING_CALL = '/incoming-call-endpoint';
const IVR_CHOICE    = '/ivr-choice-endpoint';

/* Event Handlers */
const handleIncomingCall = (req, res) => {
    const baseUrl = `http://${req.hostname}`;
    res.send("hello!");
};

const handleGatherEvent = (req, res) => {
    const baseUrl = `http://${req.hostname}`;
    res.send("hello!");
};

/* Express Setup */
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3000));

app.get('/', (req, res) => {res.send("Hello World")})
app.get(INCOMING_CALL, handleIncomingCall);
app.get(IVR_CHOICE,    handleGatherEvent);

/* Launch the Server */
http.listen(app.get('port'), function(){
    console.log('listening on *:' + app.get('port'));
});