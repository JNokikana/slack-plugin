const Hapi = require('hapi');
const Server = new Hapi.Server({
    port: process.env.PORT
});

async function initServer() {
    try{
        await Server.register(require('./src/routes/app-routes'));
        await Server.start();
        console.log("Server started succesfully.");
    }catch(error){
        console.log(error);
        console.log("Error starting server.");
    }
}

initServer();