const express = require('express');
const router = express.Router();
const GanadosCTRL = require('../controller/ganado.controller');
const ImagesCTRL = require('../controller/images.controller');


router.get('/api/v1/ganados',  GanadosCTRL.find);
router.get('/api/v1/ganados/:id', GanadosCTRL.findById);
router.post('/api/v1/ganados', GanadosCTRL.insertOne);
router.put('/api/v1/ganados',  GanadosCTRL.updateOne);
router.delete('/api/v1/ganados/:id',  GanadosCTRL.deleteOne);

router.get('/api/v1/images',  ImagesCTRL.find);
router.get('/api/v1/images/:id', ImagesCTRL.findById);
router.post('/api/v1/images', ImagesCTRL.insertOne);
router.put('/api/v1/images',  ImagesCTRL.updateOne);
router.delete('/api/v1/images/:id',  ImagesCTRL.deleteOne);



module.exports = router;
