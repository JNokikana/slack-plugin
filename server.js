require('dotenv').config({path: "./app.env"});
const Hapi = require('hapi');
const Server = new Hapi.Server({
    port: process.env.PORT,
    host: "localhost"
});

async function initServer() {
    await Server.register(require('./src/routes/app-routes.js'));
    console.log(process.env.PORT);
    if (!module.parent) {
        await Server.start();
        console.log("Server started succesfully.");
    }
}

initServer();

module.exports = Server;