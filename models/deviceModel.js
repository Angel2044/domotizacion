const connect = require("../config/db");
let connected;

(async function conection() {
    connected = await connect();
})();



async function createDevice(name, type, value, state, communication_protocol, last_update) {
    try {
        const [result] = await connected.query("INSERT INTO DEVICE(NAME, TYPE, VALUE, STATE, COMMUNICATION_PROTOCOL, LAST_UPDATE) VALUES (?,?,?,?,?,?)", [name, type, value, state, communication_protocol, last_update]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to create a device, more details: "+error);
    }
}

async function updateDevice(id) {
    try {
        const last_update = new Date();
        const [result] = await connected.query("UPDATE DEVICE SET LAST_UPDATE = ? WHERE idDevice = ?", [last_update, id]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to update a device, more details: "+error);
    }
}

async function getDeviceByID(id) {
    try {
        const [result] = await connected.query("SELECT * FROM DEVICE WHERE idDevice = ?", [id]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to get a device by ID, more details: "+error);  
    }
}

async function getALLDevice() {
    try {
        const [result] = await connected.query("SELECT * FROM DEVICE");
        return result;  
    } catch (error) {
        throw new Error("Failure trying to get all devices, more details: "+error);
    }
}   

async function deleteDevice(id) {
    try {
        const [result] = await connected.query("DELETE FROM DEVICE WHERE idDevice = ?", [id]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to delete a device, more details: "+error);
    }
}   



module.exports = {
    createDevice,
    updateDevice,
    getDeviceByID,
    getALLDevice,
    deleteDevice
}