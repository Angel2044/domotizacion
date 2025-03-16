const express = require('express');
const router = express.Router();

const actionController = require("../controllers/actionController");

router.post('/create', actionController.createActionController);
router.get('/getById/:id', actionController.getActionByIDController);
router.get('/getAll', actionController.getAllActionsController);
router.get('/getByName/:name', actionController.getActionByNameController);
router.delete('/delete/:id', actionController.deleteActionController);

module.exports = router;

