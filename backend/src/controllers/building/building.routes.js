/**
 * @Todo két végpont implementálása egy put és get metódusra
 *
 */
const express = require('express');
const controller = require('./building.controller');
const router = express.Router();

router.get('/', controller.getAllBuildingWithClassrooms);
router.put('/', controller.updateBuilding);


module.exports = router;