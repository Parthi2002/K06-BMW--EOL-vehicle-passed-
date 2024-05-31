module.exports = (app) => {
    const vehicles = require("../controllers/EOLVehiclesPassed.controller");

    app.post('/k06monitoring', vehicles.create);

    
};