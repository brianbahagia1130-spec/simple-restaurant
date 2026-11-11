const express = require("express");
const router = express.Router();

//router
router.get("/", (req, res) => {
    res.send("Get routes for categories");
});

//export
module.exports = router;