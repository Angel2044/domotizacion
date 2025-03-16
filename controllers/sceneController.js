const SceneModel = require("../models/sceneModel");

async function createSceneController(req, res) {
    const {name, description, activation, activation_time, state} = req.body;
    const scene = await SceneModel.createScene(name, description, activation, activation_time, state);
    res.json({scene});
}

async function updateDescriptionSceneController(req, res) {
    const {id, description} = req.body;
    const scene = await SceneModel.updateDescriptionScene(id, description);
    res.json({scene});
}

async function getSceneByIDController(req, res) {
    const {id} = req.params;
    const scene = await SceneModel.getSceneByID(id);
    res.json({scene});
}

async function getALLSceneController(req, res) {
    try {
        const scenes = await SceneModel.getALLScene();
        res.json({scenes});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
    
}

async function getSceneByNameController(req, res) {
    const {name} = req.params;
    const scene = await SceneModel.getSceneByNameScene(name);
    res.json({scene});
}

async function deleteSceneController(req, res) {
    const {id} = req.params;
    const scene = await SceneModel.deleteScene(id);
    res.json({scene});
}

module.exports = {
    getALLSceneController,
    getSceneByNameController,
    createSceneController,
    updateDescriptionSceneController,
    deleteSceneController,
    getSceneByIDController
}