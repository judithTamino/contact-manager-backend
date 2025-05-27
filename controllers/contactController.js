const asyncHandler = require('express-async-handler');

// @description Get Contacts
// @route GET/api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get all contacts' });
})

// @description Create Contact
// @route POST/api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fileds are require");
  }
  res.status(201).json({ message: 'Create contact' });
})

// @description Update Contact
// @route PUT/api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact ${req.params.id}` });
})

// @description Delete Contact
// @route DELETE/api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact ${req.params.id}` });
})

// @description Get Contact
// @route GET/api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact ${req.params.id}` });
})

module.exports = { getContacts, createContact, updateContact, deleteContact, getContact }
