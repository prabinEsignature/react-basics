const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

app.use(cors());
app.use(express.json());

// read the JSON data from file
let data = JSON.parse(fs.readFileSync("data/db.json", "utf8"));

// Endpoint to get all contacts
app.get("/contacts", (req, res) => {
  res.json(data.contacts);
});

// Endpoint to get a specific contact by ID
app.get("/contacts/:id", (req, res) => {
  const contactId = parseInt(req.params.id, 10);
  const contact = data.contacts.find((c) => c.id === contactId);
  if (contact) {
    res.json(contact);
  } else {
    res.status(404).send("Contact not found");
  }
});

// Endpiont to add a new contact
app.post("/contacts", (req, res) => {
  const newContact = req.body;
  newContact.id = data.contacts.length + 1; // assigning a new ID
  data.contacts.push(newContact);
  fs.writeFileSync("data/db.json", JSON.stringify(data, null, 2));
  res.status(201).send("Contact added successfully");
});

// Endpoint to update an existing contact
app.put("/contacts/:id", (req, res) => {
  const contactId = parseInt(req.params.id, 10);
  const udpatedContact = req.body;
  const index = data.contacts.findIndex((c) => c.id === contactId);
  if (index !== -1) {
    data.contacts[index] = { ...data.contacts[index], ...udpatedContact };
    fs.writeFileSync("data/db.json", JSON.stringify(data, null, 2));
    res.send("Contact updated successfully");
  } else {
    res.status(404).send("Contact not found");
  }
});

// Endpoint to delete a contact
app.delete("/contacts/:id", (req, res) => {
  const contactId = parseInt(req.params.id, 10);
  const index = data.contacts.findIndex((c) => c.id === contactId);
  if (index !== -1) {
    data.contacts.splice(index, 1);
    fs.writeFileSync("data/db.json", JSON.stringify(data, null, 2));
    res.send("Contact deleted successfully");
  } else {
    res.status(404).send("Contact not found.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Command: node server.js
// URL: http://localhost:8000/db.json
