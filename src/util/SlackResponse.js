class SlackResponse{
    constructor(text, visibleToAll){
        return {
            response_type: visibleToAll ? "in_channel" : "ephemeral",
            text: text
        };
    };
}

module.exports = SlackResponse;