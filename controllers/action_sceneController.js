const action_sceneModel = require("../models/action_sceneModel");

async function createActionScene(req, res) {
    const { actionId, sceneId } = req.body;
    const result = await action_sceneModel.createActionScene(actionId, sceneId);
    res.status(201).json(result);
}   

async function getActionSceneByID_ACTION(req, res) {
    const { id } = req.params;
    const result = await action_sceneModel.getActionSceneByID_ACTION(id);
    res.status(200).json(result);
}   

async function getActionSceneByID_SCENE(req, res) {
    const { id } = req.params;
    const result = await action_sceneModel.getActionSceneByID_SCENE(id); 
    res.status(200).json(result);
}   

async function getAllActionScenes(req, res) {
    const result = await action_sceneModel.getAllActionScenes();
    res.status(200).json(result);
}      

async function deleteActionScene(req, res) {
    const { actionId, sceneId } = req.body;
    const result = await action_sceneModel.deleteActionScene(actionId, sceneId);
    res.status(200).json(result);
}

module.exports = {
    createActionScene,
    getActionSceneByID_ACTION,
    getActionSceneByID_SCENE,
    getAllActionScenes,
    deleteActionScene
}

