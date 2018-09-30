const express = require('express');
const router = express.Router();
const GanadosCTRL = require('../controller/ganado.controller');

router.get('/api/v1/ganados',  GanadosCTRL.find);
router.get('/api/v1/ganados/:id', GanadosCTRL.findById);
router.post('/api/v1/ganados', GanadosCTRL.insertOne);
router.put('/api/v1/ganados',  GanadosCTRL.updateOne);
router.delete('/api/v1/ganados/:id',  GanadosCTRL.deleteOne);

module.exports = router;
