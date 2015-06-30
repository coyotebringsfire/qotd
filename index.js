var alexa = require('alexa-app'),
    quoteList = require('qotd.json');

var app = new alexa.app(), utterances_wordList=wordList.join('|');
app.launch(function(request,response) {
    response.shouldEndSession(true);
    console.log("request\n%j", request);
    console.log("onLaunch requestId=" + request.requestId
                + ", sessionId=" + request.sessionId);
    response.say(quoteList[Math.floor(Math.random()*quoteList.length)]).send();
    // Because this is an async handler
    return false;
});

//console.log("%j", JSON.parse(app.schema()));
//console.log("%s", app.utterances());
// Connect to lambda
exports.handler = app.lambda();
