const express = require('express');
const router = express.Router();

const deviceController = require("../controllers/deviceController");

router.post('/create', deviceController.createDeviceController);
router.put('/update', deviceController.updateDeviceController);
router.get('/getById/:id', deviceController.getDeviceByIDController);
router.get('/getAll', deviceController.getALLDeviceController);
router.delete('/delete/:id', deviceController.deleteDeviceController);

module.exports = router;
