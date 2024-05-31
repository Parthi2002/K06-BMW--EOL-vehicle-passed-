const mongoose = require('mongoose');

const EOLVehiclesPassedSchema = mongoose.Schema({
    FrameNo: String,
    EngineNo: String,
    SKUPartNo: String,
    
},{
    timestamps: true
});

module.exports = mongoose.model('EOL', EOLVehiclesPassedSchema, 'EOLVehiclesPassed');
