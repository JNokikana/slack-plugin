const Plugin = require('../service/plugin.js');

const routes = {
    name: "app-routes",
    version: "1.0.0",
    once: true,
    register: async function(server, options) {
        server.routes([
            {
                method: "GET", path: "/api/penis", handler: Plugin.getPenis
            },
            {
                method: "GET", path: "/api/credits", handler: Plugin.getCredits
            }
        ])
    }
};