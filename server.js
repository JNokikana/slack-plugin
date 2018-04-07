const Hapi = require('hapi');
const Server = new Hapi.Server({
    port: process.env.PORT
});

async function initServer() {
    await Server.register(require('./src/routes/app-routes.js'));
    if (!module.parent) {
        await Server.start();
        console.log("Server started succesfully.");
    }
}

initServer();

module.exports = Server;