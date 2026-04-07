const express = require('express');
const router = express.Router();

router.post('/docentes', (req, res) => {
  res.status(201).json({
    nombreCompleto: req.body.nombreCompleto,
  });
});

module.exports = router;
