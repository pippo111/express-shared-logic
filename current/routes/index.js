const express = require('express');
const router = express.Router();

const companies = [
  { name: 'SoftJourn' },
  { name: 'Abacus' }
]

router.get('/companies', function (req, res) {
  res.render('companies', {
    companies,
    title: "Example",
    header: "Some companies"
  });
})

module.exports = router
