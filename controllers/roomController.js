const roomModel = require("../models/roomModel");

async function createRoomController(req, res) {
    const { name} = req.body;
    const result = await roomModel.createRoom(name);
    res.status(201).json({message: "Room created successfully", result});
}   

async function updateHumidityController(req, res) {
    const { id, humidity } = req.body;
    const result = await roomModel.updateHumidity(id, humidity);
    res.status(200).json({message: "Humidity updated successfully", result});
}   

async function updateTemperatureController(req, res) {
    const { id, temperature } = req.body;
    const result = await roomModel.updateTemperature(id, temperature);
    res.status(200).json({message: "Temperature updated successfully", result});
}

async function updateLuminiscenceController(req, res) {
    const { id, luminiscence } = req.body;
    const result = await roomModel.updateLuminiscence(id, luminiscence);
    res.status(200).json({message: "Luminiscence updated successfully", result});
}

async function getRoomByIDController(req, res) {
    const { id } = req.params;
    const result = await roomModel.getRoomByID(id);
    res.status(200).json({message: "Room retrieved successfully", result});
}

async function getALLRoomController(req, res) {
    const result = await roomModel.getALLRoom();
    res.status(200).json({message: "All rooms retrieved successfully", result});
}

async function deleteRoomController(req, res) {
    const { id } = req.params;
    const result = await roomModel.deleteRoom(id);
    res.status(200).json({message: "Room deleted successfully", result});
}

module.exports = {
    createRoomController,
    updateHumidityController,
    updateTemperatureController,
    updateLuminiscenceController,
    getRoomByIDController,
    getALLRoomController,
    deleteRoomController
}