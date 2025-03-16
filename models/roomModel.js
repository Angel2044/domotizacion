const connect = require("../config/db");
let connected;

(async function conection() {
    connected = await connect();
})();


async function createRoom(name) {
    try {
        const [result] = await connected.query("INSERT INTO ROOM(NAME) VALUES (?)", [name]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to create a room, more details: "+error);
    }
}

async function updateHumidity(id, humidity) {
    try {
        const [result] = await connected.query("UPDATE ROOM SET HUMIDITY = ? WHERE idRoom = ?", [humidity, id]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to update the humidity, more details: "+error);
    }
}

async function updateTemperature(id, temperature) {
    try {
        const [result] = await connected.query("UPDATE ROOM SET TEMPERATURE = ? WHERE idRoom = ?", [temperature, id]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to update the temperature, more details: "+error);
    }
}

async function updateLuminiscence(id, luminiscence) {
    try {
        const [result] = await connected.query("UPDATE ROOM SET LUMINISCENCE = ? WHERE idRoom = ?", [luminiscence, id]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to update the luminiscence, more details: "+error);
    }
    }

async function getRoomByID(id) {
    try {
        const [result] = await connected.query("SELECT * FROM ROOM WHERE idRoom = ?", [id]);
        return result;
    } catch (error) {   
        throw new Error("Failure trying to get a room by ID, more details: "+error);
    }
}

async function getALLRoom() {
    try {
        const [result] = await connected.query("SELECT * FROM ROOM");
        return result;
    } catch (error) {
        throw new Error("Failure trying to get all rooms, more details: "+error);
    }
}   

async function deleteRoom(id) {
    try {
        const [result] = await connected.query("DELETE FROM ROOM WHERE idRoom = ?", [id]);
        return result;
    } catch (error) {
        throw new Error("Failure trying to delete a room, more details: "+error);
    }
}


module.exports = {
    createRoom,
    updateHumidity,
    updateTemperature,
    updateLuminiscence,
    getRoomByID,
    getALLRoom,
    deleteRoom
}
