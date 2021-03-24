const express = require('express');
const router = express.Router();

const users = [
  { name: 'Filip' },
  { name: 'Oleksii' }
]

router.get('/', function (req, res) {
  res.render('homepage', {
    title: "Example",
    header: "Some users"
  });
})

router.get('/users', function (req, res) {
  res.render('users', {
    users,
    title: "Example",
    header: "Some users"
  });
})

module.exports = router
