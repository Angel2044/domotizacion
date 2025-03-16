const connect = require("../config/db");
let connected;

(async function conection() {
    connected = await connect();
})();

async function createAction(name, description, type, value) {
    try {
        const [result] = await connected.query("INSERT INTO ACTION(NAME, DESCRIPTION, TYPE, VALUE) VALUES (?,?,?,?)", [name, description, type, value]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to create an action, more details: "+error);
    }
}
async function getActionByID(id) {q
    try {
        const [result] = await connected.query("SELECT * FROM ACTION WHERE idAction = ?", [id]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to get an action by ID, more details: "+error);
    }
}
async function getAllActions() {
    try {
        const [result] = await connected.query("SELECT * FROM ACTION");
        return result;
    } catch (error) {
        throw new Error("Failure trying to get all actions, more details: "+error);
    }
}
async function getActionByName(name) {
    try {
        const [result] = await connected.query("SELECT * FROM ACTION WHERE NAME = ?", [name]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to get an action by name, more details: "+error);
    }
}
async function deleteAction(id) {
    try {
        const [result] = await connected.query("DELETE FROM ACTION WHERE idAction = ?", [id]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to delete an action, more details: "+error);
    }
}

module.exports = {
    createAction,   
    getActionByID,
    getAllActions,
    getActionByName,
    deleteAction
}

