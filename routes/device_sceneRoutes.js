const express = require('express');
const router = express.Router();

const device_sceneController = require("../controllers/device_scenaController");

router.post('/create', device_sceneController.createDeviceScene);
router.get('/getByIdDevice/:id', device_sceneController.getDeviceSceneByID_DEVICE);
router.get('/getByIdScene/:id', device_sceneController.getDeviceSceneByID_SCENE);
router.get('/getAll', device_sceneController.getAllDeviceScenes);
router.delete('/delete', device_sceneController.deleteDeviceScene);

module.exports = router;

