const DeviceModel = require("../models/deviceModel");

async function createDeviceController(req, res) {
    const {name, type, value, state, communication_protocol, last_update} = req.body;
    const device = await DeviceModel.createDevice(name, type, value, state, communication_protocol, last_update);
    res.json({device});
}

async function updateDeviceController(req, res) {
    const {id} = req.body;
    const device = await DeviceModel.updateDevice(id);
    res.json({device});
}

async function getDeviceByIDController(req, res) {
    const {id} = req.params;
    const device = await DeviceModel.getDeviceByID(id);
    res.json({device});
}

async function getALLDeviceController(req, res) {
    const devices = await DeviceModel.getALLDevice();
    res.json({devices});
}

async function deleteDeviceController(req, res) {
    const {id} = req.params;
    const device = await DeviceModel.deleteDevice(id);
    res.json({device});
}

module.exports = {
    createDeviceController,
    updateDeviceController,
    getDeviceByIDController,
    getALLDeviceController,
    deleteDeviceController
}
