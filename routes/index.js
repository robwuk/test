const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
//  res.send("<h1>Login</h1><br />");
  res.render('form', { title: 'Registration form' });
});

module.exports = router;
