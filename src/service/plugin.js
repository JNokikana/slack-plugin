const SlackResponse = require('../util/SlackResponse.js');

class Plugin{
    getPenis(request, reply){
        let payload = request.payload;
        let command = payload.text;
        console.log("Inc payload: ", payload);
        let user = command.slice(1, command.indexOf(">"));
        console.log(user);
        return new SlackResponse("Perse", true);
    }
    getCredits(request, reply){
        let payload = request.payload;
        console.log("Inc payload: ", payload);
        return new SlackResponse("You can blame JNokikana for this atrocity", false);
    }
}

module.exports = new Plugin();