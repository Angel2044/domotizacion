const express = require('express');
const router = express.Router();

const room_deviceController = require("../controllers/room_deviceController");

router.post('/create', room_deviceController.createRoomDevice);
router.get('/getByIdRoom/:id', room_deviceController.getRoomDeviceByID_ROOM);
router.get('/getByIdDevice/:id', room_deviceController.getRoomDeviceByID_DEVICE);
router.get('/getAll', room_deviceController.getAllRoomDevices);
router.delete('/delete', room_deviceController.deleteRoomDevice);  

module.exports = router;

