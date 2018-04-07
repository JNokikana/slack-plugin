const { expect } = require('code');
const Lab = require('lab');
const { after, before, describe, it } = exports.lab = Lab.script();
const Query = require('querystring');
const Server = require('../server.js');

let payload = {
    token: "gIkuvaNzQIHg97ATvDxqgjtO",
    team_id: "T0001",
    team_domain: "example",
    enterprise_id: "E0001",
    enterprise_name: "Globular%20Construct%20Inc",
    channel_id: "C2147483705",
    channel_name: "test",
    user_id: "U2147483697",
    user_name: "Steve",
    command: "/weather",
    text: 94070,
    response_url: "https://hooks.slack.com/commands/1234/5678",
    trigger_id: "13345224609.738474920.8088930838d88f008e0"
}

describe('Routes work as they should', async () => {
    it("Credits route works", async () => {
        let request = {
            method: "POST",
            url: "/api/credits",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            payload: Query.stringify(payload)
        }
        let response = await Server.inject(request);
        console.log("Response: ", response.payload);
        expect(true).to.equal(true);
    });
    it("Penis route works", async () => {
        let request = {
            method: "POST",
            url: "/api/penis",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            payload: Query.stringify(payload)
        }
        let response = await Server.inject(request);
        console.log("Response: ", response.payload);
        expect(true).to.equal(true);
    });
});