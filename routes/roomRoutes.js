const express = require('express');
const router = express.Router();

const roomController = require("../controllers/roomController");

router.post('/create', roomController.createRoomController);
router.put('/updateHumidity', roomController.updateHumidityController);
router.put('/updateTemperature', roomController.updateTemperatureController);
router.put('/updateLuminiscence', roomController.updateLuminiscenceController);
router.get('/getById/:id', roomController.getRoomByIDController);
router.get('/getAll', roomController.getALLRoomController);
router.delete('/delete/:id', roomController.deleteRoomController);

module.exports = router;
