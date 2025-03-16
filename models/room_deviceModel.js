const connect = require("../config/db");
let connected;
(async function conection() {
    connected = await connect();
})();

async function createRoomDevice(roomId, deviceId) {
    try {
        const [result] = await connected.query("INSERT INTO room_has_device(ROOM_idROOM, DEVICE_idDEVICE) VALUES (?, ?)", [roomId, deviceId]);
        return result;
    } catch (error) {   
        throw new Error("Failure trying to create a room device, more details: "+error);
    }
}

async function getRoomDeviceByID_ROOM(id) {
    try {   
        const [result] = await connected.query("SELECT * FROM room_has_device WHERE ROOM_idROOM = ?", [id]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to get a room device by ID, more details: "+error);
    }
}   

async function getRoomDeviceByID_DEVICE(id) {
    try {
        const [result] = await connected.query("SELECT * FROM room_has_device WHERE DEVICE_idDEVICE = ?", [id]);
        return result;
    } catch (error) {           
        throw new Error("Failure trying to get a room device by ID, more details: "+error);    
    }
}

async function getAllRoomDevices() {
    try {   
        const [result] = await connected.query("SELECT * FROM room_has_device");
        return result;
    } catch (error) {
        throw new Error("Failure trying to get all room devices, more details: "+error);
    }
}   

async function deleteRoomDevice(roomId, deviceId) {
    try {
        const [result] = await connected.query("DELETE FROM room_has_device WHERE ROOM_idROOM = ? AND DEVICE_idDEVICE = ?", [roomId, deviceId]);
        return result;
    } catch (error) {       
        throw new Error("Failure trying to delete a room device, more details: "+error);
    }
}   

module.exports = {
    createRoomDevice,   
    getRoomDeviceByID_ROOM,
    getRoomDeviceByID_DEVICE,
    getAllRoomDevices,
    deleteRoomDevice
}


