const connect = require("../config/db");
let connected;
(async function conection() {
    connected = await connect();
})();

async function createActionScene(actionId, sceneId) {
    try {
        const [result] = await connected.query("INSERT INTO action_has_scene(ACTION_idACTION, SCENE_idSCENE) VALUES (?, ?)", [actionId, sceneId]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to create an action scene, more details: "+error);
    }
}


async function getActionSceneByID_ACTION(id) {
    try {
        const [result] = await connected.query("SELECT * FROM action_has_scene WHERE ACTION_idACTION = ?", [id]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to get an action scene by ID, more details: "+error);
    }
}

async function getActionSceneByID_SCENE(id) {
    try {
        const [result] = await connected.query("SELECT * FROM action_has_scene WHERE SCENE_idSCENE = ?", [id]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to get an action scene by ID, more details: "+error);
    }
}

async function getAllActionScenes() {
    try {
        const [result] = await connected.query("SELECT * FROM action_has_scene");
        return result;
    } catch (error) {
        throw new Error("Failure trying to get all action scenes, more details: "+error);
    }
}
async function deleteActionScene(actionId, sceneId) {
    try {
        const [result] = await connected.query("DELETE FROM action_has_scene WHERE ACTION_idACTION = ? AND SCENE_idSCENE" , [actionId, sceneId]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to delete an action scene, more details: "+error);
    }
}
module.exports = {
    createActionScene,
    getActionSceneByID_ACTION,
    getActionSceneByID_SCENE,
    getAllActionScenes,
    deleteActionScene
}


