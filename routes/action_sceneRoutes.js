const express = require('express');
const router = express.Router();

const action_sceneController = require("../controllers/action_sceneController");

router.post('/create', action_sceneController.createActionScene);
router.get('/getByIdAction/:id', action_sceneController.getActionSceneByID_ACTION);
router.get('/getByIdScene/:id', action_sceneController.getActionSceneByID_SCENE);
router.get('/getAll', action_sceneController.getAllActionScenes);
router.delete('/delete', action_sceneController.deleteActionScene);

module.exports = router;

