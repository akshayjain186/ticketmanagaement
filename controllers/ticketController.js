const Ticket = require('../models/Ticket');

// Create Ticket
// const createTicket = async (req, res) => {
//   try {
//     const { title, description, priority } = req.body;
//     if(!title || !description || !priority){
//         res.status(400).json({
//             status:false,
//             msg:"please fill all fileds"
//         })
//     }
//     const ticket = new Ticket({ title, description, priority });

//     await ticket.save();

//     res.status(201).json({
//         status:true,
//          message: 'Ticket created successfully',
//           ticket 
//         });

//   } catch (error) {
//     res.status(500).json({
//           status:false,
//          msg: 'Server Error'+error.mess
//          });
//   }
// };

// new code 
const createTicket = async (req, res) => {
    try {
      const { title, description } = req.body;
      if(!title || !description ){
          res.status(400).json({
              status:false,
              msg:"please fill all fileds"
          })
      }
      const ticket = new Ticket({ title, description});
  
      await ticket.save();
  
      res.status(201).json({
          status:true,
           message: 'Ticket created successfully',
            ticket 
          });
  
    } catch (error) {
      res.status(500).json({
            status:false,
           msg: 'Server Error'+error.mess
           });
    }
  };
  
// Get All Tickets
const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get Ticket by ID
const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ error: 'Ticket not found' });
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Update Ticket
const updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ticket) return res.status(404).json({ error: 'Ticket not found' });
    res.status(200).json({ message: 'Ticket updated successfully', ticket });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Delete Ticket
const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) return res.status(404).json({ error: 'Ticket not found' });
    res.status(200).json({ message: 'Ticket deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
module.exports = {
    createTicket,
    getTickets,
    getTicketById,
    updateTicket,
    deleteTicket
};