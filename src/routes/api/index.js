const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.send("OK"));
/**
 * GET v1/status
 */
router.get("/status", (req, res) => res.send("OK"));

module.exports = router;
