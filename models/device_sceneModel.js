const connect = require("../config/db");
let connected;
(async function conection() {
    connected = await connect();
})();

async function createDeviceScene(deviceId, sceneId) {
    try {
        const [result] = await connected.query("INSERT INTO device_has_scene(DEVICE_idDEVICE, SCENE_idSCENE) VALUES (?, ?)", [deviceId, sceneId]);
        return result;
    } catch (error) {   
        throw new Error("Failure trying to create a device scene, more details: "+error);
    }
}

async function getDeviceSceneByID_DEVICE(id) {
    try {
        const [result] = await connected.query("SELECT * FROM device_has_scene WHERE DEVICE_idDEVICE = ?", [id]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to get a device scene by ID, more details: "+error);
    }
}

async function getDeviceSceneByID_SCENE(id) {
    try {
        const [result] = await connected.query("SELECT * FROM device_has_scene WHERE SCENE_idSCENE = ?", [id]);
        return result;
    } catch (error) {           
        throw new Error("Failure trying to get a device scene by ID, more details: "+error);    
    }
}

async function getAllDeviceScenes() {
    try {
        const [result] = await connected.query("SELECT * FROM device_has_scene");
        return result;
    } catch (error) {
        throw new Error("Failure trying to get all device scenes, more details: "+error);
    }
}

async function deleteDeviceScene(deviceId, sceneId) {
    try {
        const [result] = await connected.query("DELETE FROM device_has_scene WHERE DEVICE_idDEVICE = ? AND SCENE_idSCENE = ?", [deviceId, sceneId]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to delete a device scene, more details: "+error);
    }
}   

module.exports = {
    createDeviceScene,
    getDeviceSceneByID_DEVICE,
    getDeviceSceneByID_SCENE,
    getAllDeviceScenes,
    deleteDeviceScene
}
