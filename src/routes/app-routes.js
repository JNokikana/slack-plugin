const Plugin = require('../service/plugin.js');

module.exports = {
    name: "app-routes",
    version: "1.0.0",
    once: true,
    register: async function(server, options) {
        server.route([
            {
                method: "POST", path: "/api/test", handler: Plugin.getTestMessage
            },
            {
                method: "POST", path: "/api/credits", handler: Plugin.getCredits
            }
        ]);
    }
};