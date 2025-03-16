const actionModel = require("../models/actionModel");

async function createActionController(req, res) {
    const { name, description, type, value } = req.body;
    const result = await actionModel.createAction(name, description, type, value);
    res.status(201).json({message: "Action created successfully", result});
}

async function getActionByIDController(req, res) {
    const { id } = req.params;
    const result = await actionModel.getActionByID(id);
    res.status(200).json({message: "Action retrieved successfully", result});
}

async function getAllActionsController(req, res) {
    const result = await actionModel.getAllActions();
    res.status(200).json({message: "All actions retrieved successfully", result});
}

async function getActionByNameController(req, res) {
    const { name } = req.params;
    const result = await actionModel.getActionByName(name);
    res.status(200).json({message: "Action retrieved successfully", result});
} 

async function deleteActionController(req, res) {
    const { id } = req.params;
    const result = await actionModel.deleteAction(id);
    res.status(200).json({message: "Action deleted successfully", result});
} 

module.exports = {
    createActionController,
    getActionByIDController,
    getAllActionsController,
    getActionByNameController,
    deleteActionController
}

