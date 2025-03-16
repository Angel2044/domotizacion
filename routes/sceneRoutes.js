const express = require('express');
const router = express.Router();

const sceneController = require("../controllers/sceneController");

router.get('/getAll', sceneController.getALLSceneController);
router.get('/getByName/:name', sceneController.getSceneByNameController);
router.get('/getById/:id', sceneController.getSceneByIDController);
router.post('/create', sceneController.createSceneController);
router.put('/updateDescription', sceneController.updateDescriptionSceneController);
router.delete('/delete/:id', sceneController.deleteSceneController);

module.exports = router;