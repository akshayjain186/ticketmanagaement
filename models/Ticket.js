// const mongoose = require('mongoose');

// const ticketSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   priority: {
//     type: String,
//     enum: ['low', 'medium', 'high'],
//     required: true,
//   },
// });

// const Ticket = mongoose.model('Ticket', ticketSchema);

// module.exports = Ticket;

// new 
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['open', 'in-progress', 'closed'],
    default: 'open',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt field before saving
ticketSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;

