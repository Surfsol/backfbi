const express = require("express")
const router = express.Router()
router.get("/", (req, res) => {
    console.log('jjjjjjj')
    res.status(200).json({ message:'Its working' });
  });

module.exports = router