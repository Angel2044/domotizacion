const device_sceneModel = require("../models/device_sceneModel");

async function createDeviceScene(req, res) {
    const { deviceId, sceneId } = req.body;
    const result = await device_sceneModel.createDeviceScene(deviceId, sceneId);
    res.status(201).json(result);
}

async function getDeviceSceneByID_DEVICE(req, res) {
    const { id } = req.params;
    const result = await device_sceneModel.getDeviceSceneByID_DEVICE(id);
    res.status(200).json(result);
}

async function getDeviceSceneByID_SCENE(req, res) {
    const { id } = req.params;
    const result = await device_sceneModel.getDeviceSceneByID_SCENE(id);
    res.status(200).json(result);
}   

async function getAllDeviceScenes(req, res) {
    const result = await device_sceneModel.getAllDeviceScenes();
    res.status(200).json(result);
}       

async function deleteDeviceScene(req, res) {
    const { deviceId, sceneId } = req.body;
    const result = await device_sceneModel.deleteDeviceScene(deviceId, sceneId);
    res.status(200).json(result);
}   

module.exports = {
    createDeviceScene,
    getDeviceSceneByID_DEVICE,
    getDeviceSceneByID_SCENE,
    getAllDeviceScenes,
    deleteDeviceScene
}

