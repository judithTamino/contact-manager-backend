const express = require('express');
const { getContacts, createContact, updateContact, deleteContact, getContact } = require('../controllers/contactController');
const router = express.Router();

// Get Contacts
// Create Contact
router.route("/").get(getContacts).post(createContact);

// Update Contact
// Delete Contact
// Get Contact
router.route("/:id").put(updateContact).delete(deleteContact).get(getContact);

module.exports = router;