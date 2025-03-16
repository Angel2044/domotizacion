const connect = require("../config/db");
let connected;

(async function conection() {
    connected = await connect();
})();

async function createScene(name, description, activation, activation_time, state) {
    try {
        const [result] = await connected.query("INSERT INTO SCENE(NAME, DESCRIPTION, ACTIVATION, ACTIVATION_TIME, STATE) VALUES (?,?,?,?,?)", [name, description, activation, activation_time, state]);
    return result;
    } catch (error) {
        throw new Error("Failure trying to create a scene, more details: "+error);
    }
}

async function updateDescriptionScene(id, description) {
    try {
        const [result] = await connected.query("UPDATE SCENE SET DESCRIPTION = ? WHERE idScene=?", [description, id]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to update the Description of the Scene, more deatails: "+error);
    }
}
async function getSceneByNameScene(name) {
    try {
        const [result] = await connected.query("SELECT * FROM SCENE WHERE NAME = ?", [name]);
        return result;
    } catch (error) {
        throw new Error("Error al intentar obtener la escena por nombre, más detalles: "+error);
    }
}
async function getSceneByID(id) {
    try {
        const [result] = await connected.query("SELECT * FROM SCENE WHERE idScene = ?", [id]);
        return result;
    } catch (error) {
        throw new Error("Error al intentar obtener la escena por ID, más detalles: "+error);
    }
}

async function getALLScene() {
    try {
        const [result] = await connected.query("SELECT * FROM SCENE");
        return result;
    } catch (error) {
        throw new Error("Failure trying to get all the records from scene, more details: "+error);
    }
}
async function deleteScene(id) {
    try {
        const [result] = await connected.query("DELETE FROM SCENE WHERE idScene=?", [id]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to delete the Scene, more details: "+error); 
    }
}

module.exports ={
    createScene,
    updateDescriptionScene,
    getALLScene,
    deleteScene,
    getSceneByNameScene,
    getSceneByID
}