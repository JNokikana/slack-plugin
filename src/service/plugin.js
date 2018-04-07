const SlackResponse = require('../util/SlackResponse.js');
const Generator = require('../util/ResponseGenerator.js');

class Plugin{
    getPenis(request, reply){
        let payload = request.payload;
        let command = payload.text;
        console.log("Inc payload: ", payload);
        let userId = command.slice(1, command.indexOf(">")).split("|")[0];
        return new SlackResponse(Generator.generateResponse(userId), true);
    }
    getCredits(request, reply){
        let payload = request.payload;
        console.log("Inc payload: ", payload);
        return new SlackResponse("You can blame JNokikana for this atrocity", false);
    }
}

module.exports = new Plugin();