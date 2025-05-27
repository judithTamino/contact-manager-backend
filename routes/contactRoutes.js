const express = require('express');
const router = express.Router();

// Get Contacts
router.route("/").get((req, res) => {
  res.status(200).json({ message: 'Get all contacts' });
});

// Create Contact
router.route("/").post((req, res) => {
  res.status(200).json({ message: 'Create contact' });
});

// Update Contact
router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Update contact ${req.params.id}` });
});

// Delete Contact
router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `Delete contact ${req.params.id}` });
});

// Get Contact
router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Get contact ${req.params.id}` });
});

module.exports = router;