// @description Get Contacts
// @route GET/api/contacts
// @access public
const getContacts = (req, res) => {
  res.status(200).json({ message: 'Get all contacts' });
}

// @description Create Contact
// @route POST/api/contacts
// @access public
const createContact = (req, res) => {
  const {name, email, phone} = req.body;

  if(!name || !email || !phone) {
    res.status(400);
    throw new Error("All fileds are require");
  }
  res.status(201).json({ message: 'Create contact' });
}

// @description Update Contact
// @route PUT/api/contacts/:id
// @access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact ${req.params.id}` });
}

// @description Delete Contact
// @route DELETE/api/contacts/:id
// @access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact ${req.params.id}` });
}

// @description Get Contact
// @route GET/api/contacts/:id
// @access public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact ${req.params.id}` });
}

module.exports = { getContacts, createContact, updateContact, deleteContact, getContact }
