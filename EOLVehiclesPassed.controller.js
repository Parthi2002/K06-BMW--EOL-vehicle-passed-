const Vehicles = require('../models/EOLVehiclesPassed.model');


exports.create = (req, res) => {
    

    const vehicles = new Vehicles({
        FrameNo: req.body.FrameNo,
        EngineNo: req.body.EngineNo,
        SKUPartNo: req.body.SKUPartNo
        
    });

    vehicles.save()
        .then(vehicles => {
            if (!vehicles) {

                return res.status(404).send({
                    message: 'vehicle not passed'
                });
            }

            res.send(vehicles);
        }).catch(err => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: 'vehicle not passed, Error: ' + err
                })
            }

            res.status(500).send({
                message: err.message || 'Some error occurred while creating vehicle, Error: ' + err
            });
        });

}