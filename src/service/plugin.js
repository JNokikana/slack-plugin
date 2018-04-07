const SlackResponse = require('../util/SlackResponse.js');
const Generator = require('../util/ResponseGenerator.js');

class Plugin {
    getPenis(request, reply) {
        let sliced;
        let userId;
        let payload = request.payload;
        let command = payload.text;
        let index = command.indexOf(">");

        if (index > 1) {
            sliced = command.slice(1, index);
            userId = sliced.split("|");
            if(sliced !== userId && userId.length === 2){
                userId = userId[0];
                return new SlackResponse(Generator.generateResponse(userId), true);
            }
            else{
                return new SlackResponse("Invalid command", false);
            }
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