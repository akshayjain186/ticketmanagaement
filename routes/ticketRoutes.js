const express = require('express'); // Import express
const router = express.Router(); // Create a Router instance
const { createTicket, getTickets, getTicketById, updateTicket, deleteTicket } = require('../controllers/ticketController');
// const validateTicket = require('../middleware/validationMiddleware');

// Create Ticket
console.log('kaise h saare')
console.log(createTicket, getTickets, getTicketById, updateTicket, deleteTicket)
console.log('kaise h saare')
router.post('/tickets',  createTicket);

// Get All Tickets
router.get('/tickets', getTickets);

// Get Ticket by ID
router.get('/tickets/:id', getTicketById);

// Update Ticket
router.put('/tickets/:id',  updateTicket);

// Delete Ticket
router.delete('/tickets/:id', deleteTicket);

module.exports = router;
