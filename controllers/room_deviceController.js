const room_deviceModel = require("../models/room_deviceModel");

async function createRoomDevice(req, res) {
    const { roomId, deviceId } = req.body;
    const result = await room_deviceModel.createRoomDevice(roomId, deviceId);
    res.status(201).json(result);
}       

async function getRoomDeviceByID_ROOM(req, res) {
    const { id } = req.params;
    const result = await room_deviceModel.getRoomDeviceByID_ROOM(id);
    res.status(200).json(result);
}                         

async function getRoomDeviceByID_DEVICE(req, res) {
    const { id } = req.params;
    const result = await room_deviceModel.getRoomDeviceByID_DEVICE(id);
    res.status(200).json(result);
}      

async function getAllRoomDevices(req, res) {
    const result = await room_deviceModel.getAllRoomDevices();
    res.status(200).json(result);
}      

async function deleteRoomDevice(req, res) {
    const { roomId, deviceId } = req.body;
    const result = await room_deviceModel.deleteRoomDevice(roomId, deviceId);
    res.status(200).json(result);
}   

module.exports = {
    createRoomDevice,
    getRoomDeviceByID_ROOM,
    getRoomDeviceByID_DEVICE,
    getAllRoomDevices,
    deleteRoomDevice
}
