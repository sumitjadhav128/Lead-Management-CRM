const express = require("express");
const authMiddleware = require("../middleware/authMiddleware")

const router = express.Router();

const {
  createLead,
  getLeads,
  updateLead,
  deleteLead
} = require("../controllers/leadController");

router.post("/",authMiddleware, createLead);

router.get("/",authMiddleware, getLeads);

router.put("/:id",authMiddleware, updateLead);

router.delete("/:id",authMiddleware, deleteLead);

module.exports = router;