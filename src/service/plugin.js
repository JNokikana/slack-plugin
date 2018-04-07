const SlackResponse = require('../util/SlackResponse.js');
const Generator = require('../util/ResponseGenerator.js');
const Boom = require('boom');

class Plugin {
    getPenis(request, reply) {
        let sliced;
        let userId;
        let payload = request.payload;
        if (!payload.text) {
            return Boom.badRequest();
        }
        let command = payload.text;
        let index = command.indexOf(">");
        console.log("Inc payload: ", payload);
        console.log(index);
        if (command.startsWith("<") && index > 1 && command.length === index + 1) {
            userId = command.slice(0, index + 1);
            return new SlackResponse(Generator.generateResponse(userId), true);
        }
        else {
            return new SlackResponse("Invalid command", false);
        }
    }
    getCredits(request, reply) {
        let payload = request.payload;
        console.log("Inc payload: ", payload);
        return new SlackResponse("You can blame JNokikana for this atrocity", false);
    }
}

module.exports = new Plugin();